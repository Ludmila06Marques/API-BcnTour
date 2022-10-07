import { prisma } from "../dbStrategy/db.js";
import * as userSchema from "../type/userType.js"


export async function findUserByEmail(email:string){
    return prisma.users.findUnique({where:{email}})
}
export async function findById(id: number) {
  return prisma.users.findUnique({
    where: { id }
  });
}
export async function insertUser(user:userSchema.CreateUserType){
    return prisma.users.create({data:user})
}

export async function deleteUser(id:number){
  return prisma.users.delete({where:{id}})
}
export async function toUpdate(id:number , mode:string){
  return prisma.users.update({
     where: {
      id
     },
     data: {
       mode,
     },
   })
 }