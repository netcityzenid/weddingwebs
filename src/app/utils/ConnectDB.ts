import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("MONGO_URI is not defined in .env.local");
}

// Cache status koneksi
let isConnected: boolean = false; // Untuk melacak status koneksi

export const dbConnect = async () => {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const connection = await mongoose.connect(MONGODB_URI as string);

    isConnected = connection.connections[0].readyState === 1;
    if (isConnected) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw new Error("Database connection error");
  }
};

export default dbConnect;
