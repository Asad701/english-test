import mongoose from 'mongoose';

const DEFAULT_URI = "mongodb://ADMIN:asad123ASAD@ac-gkdi2ze-shard-00-00.6malrfw.mongodb.net:27017,ac-gkdi2ze-shard-00-01.6malrfw.mongodb.net:27017,ac-gkdi2ze-shard-00-02.6malrfw.mongodb.net:27017/test?ssl=true&authSource=admin&retryWrites=true&w=majority";

const MONGO_URI = process.env.MONGO_URI || DEFAULT_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongooseInstance) => {
      console.log('MongoDB successfully connected.');
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
