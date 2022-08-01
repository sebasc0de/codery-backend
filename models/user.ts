import { User as UserProps } from "../interfaces/User";
import { Schema, model } from "mongoose";

const UserSchema = new Schema<UserProps>({
  archived: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default: "",
  },
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
    required: [true, "El nombre del restaurante es requerido"],
    unique: true,
  },
  suscription: {
    type: String,
    default: "FREE",
  },
});

export const User = model("User", UserSchema);
