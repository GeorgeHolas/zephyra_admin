import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI || "", {
      dbName: "Zephyra_Admin"
    });
    console.log('MONGO_URI:', process.env.MONGO_URI);

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};
