import mongoose from "mongoose";

type ConnecionObject = {
  isConnected?: number;
};

const connection: ConnecionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

export default dbConnect;
