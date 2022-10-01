import { Request , Response } from "express"
import { createUser , loginUser , findUserById} from "../services/userService.js";
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

export async function geById(req:Request ,res:Response){
  const id= parseInt(req.params.id)

  const result= await findUserById(id)

  res.send(result).status(200)//sucess
}

