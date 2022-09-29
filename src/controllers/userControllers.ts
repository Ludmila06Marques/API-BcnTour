import { Request , Response } from "express"
import { createUser , loginUser} from "../services/userService";
import { CreateUserType , CreateUserTypeLogin } from "../type/userType";

export async function login(req:Request ,res:Response){
  const user:CreateUserTypeLogin = req.body;
  const token = await loginUser(user);
  res.send({token}).status(200);
}

export async function signup(req:Request ,res:Response){
  const user:CreateUserType = req.body;
  await createUser(user);
  res.sendStatus(201);
}