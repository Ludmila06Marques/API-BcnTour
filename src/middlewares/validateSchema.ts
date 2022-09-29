import { NextFunction, Request, Response } from "express";
import { userSchema } from "../schemas/userSchema.js";
import { failSchema } from "../utils/errorUtils.js";

export function validateSignup(req : Request, res:Response, next:NextFunction) {
  const user = req.body
  console.log(req.body)
  const validation = userSchema.validate(user)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }

  next()
}

