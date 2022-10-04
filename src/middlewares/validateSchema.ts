import { NextFunction, Request, Response } from "express";
import * as userSchema from "../schemas/userSchema.js"
import * as optionSchema from "../schemas/optionSchema.js"
import * as publishSchema from "../schemas/publishSchema.js"
import { failSchema } from "../utils/errorUtils.js";

export function validateSignup(req : Request, res:Response, next:NextFunction) {
  const user = req.body
  console.log(req.body)
  const validation = userSchema.userSchemaSignup.validate(user)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }

  next()
}

export function validateLogin(req : Request, res:Response, next:NextFunction) {
  const user = req.body
  console.log(req.body)
  const validation = userSchema.userSchemaLogin.validate(user)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }

  next()
}

export function validateOption(req : Request, res:Response, next:NextFunction) {
  const option = req.body
  console.log(req.body)
  const validation = optionSchema.optionSchemaInput.validate(option)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }

  next()
}


export function validatePublish(req : Request, res:Response, next:NextFunction) {
  const publish = req.body
  console.log(req.body)
  const validation =publishSchema.publishSchemaInput.validate(publish)
  if (validation.error) {
  console.log(validation.error)
    throw failSchema('Wrong schema')
  }

  next()
}


