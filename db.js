import mongoose from "mongoose";

const dbConnect = async () => {
  

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("successfully connected to database")
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default dbConnect;
