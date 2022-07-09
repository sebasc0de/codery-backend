import mongoose from "mongoose";

export const connectMongoDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:37598602abnsd@cluster0.ebwxx.mongodb.net/codery"
    )
    .then(() => {
      console.log("connected to MongoDB");
    });
};
