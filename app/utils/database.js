import mongoose, { Mongoose } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shizukanagogo_db_user:4LQqCkUqU2t5jHGj@cluster0.sh0vhiz.mongodb.net/nextAppDataBase?appName=Cluster0",
    );
    console.log("success:connected to MongoDB");
  } catch {
    console.log("Failure:Unconnected to MongoDB");
    throw new Error();
  }
};
export default connectDB;
