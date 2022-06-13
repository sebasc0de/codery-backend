import { Schema, model } from "mongoose";
import User from "../interfaces/User";

const UserSchema = new Schema<User>({
  archived: {
    type: Boolean,
    default: false,
  },
  avatar: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  role: {
    default: "FREE",
  },
});

export const User = model("User", UserSchema);
