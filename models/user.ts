import { User as UserProps } from "../src/types";
import { Schema, model } from "mongoose";

const UserSchema = new Schema<UserProps>({
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
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: "FREE",
  },
});

export const User = model("User", UserSchema);
