import { Users} from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as errorsSchema from "../utils/errorUtils.js"
import * as userRepository from "../repositories/userRepository.js"
import * as userSchema from "../type/userType.js"
import * as publishService from "../services/publishService.js"

dotenv.config()

export async function createUser(user:userSchema.CreateUserType){
    const userExist = await userRepository.findUserByEmail(user.email);
    if (userExist) {
      throw errorsSchema.failsConflict();
    }
    const rand = 10;
    const criptoPass = bcrypt.hashSync(user.password, rand);
    await userRepository.insertUser ({...user, password: criptoPass});
}

export async function loginUser(login: userSchema.CreateUserTypeLogin) {
  
  const user = await createToken(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  const formatResponse={
    token , 
    user
  }
  return formatResponse
}
export async function createToken(login: userSchema.CreateUserTypeLogin) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw errorsSchema.failUnauth("unauthorized");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  console.log(isPasswordValid)
  if (!isPasswordValid) throw errorsSchema.failUnauth("Invalid password");

  return user;
}
export async function findUserById(id: number) {
  const user = await userRepository.findById (id);
  if (!user) throw errorsSchema.failNotFound("User not found");


  return user;
}
