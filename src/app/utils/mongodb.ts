import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI as string);

  connection.isConnected = db.connections[0].readyState;
}

export default connectToDatabase;
