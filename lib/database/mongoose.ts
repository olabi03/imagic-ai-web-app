import mongoose, {Mongoose} from "mongoose";


const MONGODB_URL = process.env.MONGODB_URL


interface MOngooseConnection {
    conn: Mongoose | null; // conn = short of connection
    promise: Promise<Mongoose> | null;
}

let cached: MOngooseConnection = (global as any).Mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async function() {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL)
    throw new Error('Missing MONGODB_URL')

    cached.promise = cached.promise || mongoose.connect
    (MONGODB_URL, {dbName: 'Imagic', bufferCommands: false
})

cached.conn = await cached.promise

return cached.conn;
}