'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { UserButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const Mobilenav = () => {
    
    const pathname = usePathname();

  return (
    <header className="header">

        <Link href='/'>
       <h4 
      className='font-bold cursor-pointer
      text-3xl text-[#5271FF]'> 
      Imagic 
      </h4>
      </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
              
              <Link href='/'>
           <h4 
            className='font-bold cursor-pointer
             text-3xl text-[#5271FF]'> 
              Imagic 
               </h4>
            </Link>

              <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
            </SignedIn>
        </nav>
    </header>
  )
}

export default Mobilenav