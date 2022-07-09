import { Request } from "express";

export interface AuthInfoRequest extends Request {
  uuid?: string;
}
