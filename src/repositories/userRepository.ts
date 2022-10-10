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

 export async function toUpdateInfo(id:number , body:any){
  return prisma.users.update({
     where: {
      id
     },
     data: {
     name:body.name,
     country:body.country,
     urlImage:body.urlImage
     },
   })
 }
 export async function toUpdateName(id:number ,name:string){
  return prisma.users.update({
     where: {
      id
     },
     data: {
   name
     },
   })
 }
 export async function toUpdatePhoto(id:number ,urlImage:string){
  return prisma.users.update({
     where: {
      id
     },
     data: {
      urlImage
     },
   })
 }
 export async function toUpdateCountry(id:number ,country:string){
  return prisma.users.update({
     where: {
      id
     },
     data: {
      country
     },
   })
 }