import { Request , Response } from "express"
import { createUser , loginUser} from "../services/userService.js";
import { CreateUserType , CreateUserTypeLogin } from "../type/userType.js";

export async function login(req:Request ,res:Response){
  const user:CreateUserTypeLogin = req.body;
  const response = await loginUser(user);
  res.send(response).status(200);
}

export async function signup(req:Request ,res:Response){
  const user:CreateUserType = req.body;
  await createUser(user);
  res.sendStatus(201);
}