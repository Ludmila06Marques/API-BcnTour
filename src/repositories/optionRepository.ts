import { prisma } from "../dbStrategy/db.js"
import * as optionSchema from "../type/optionType.js"


export async function getAll() {
    return prisma.options.findMany()
  }
  
  export async function getOne(id:number) {
    return prisma.options.findFirst({
      where: {   
        id
      }
    })
  }
  
  export async function insert(option: optionSchema.CreateOptionType) {
    return prisma.options.create({
      data: {...option }
    })
  }
  
  export async function  toDelete(id: number) {
    return prisma.options.delete({
      where: { id }
    })
  }
  export async function toUpdate(id:number , name:string){
   return prisma.options.update({
      where: {
       id
      },
      data: {
        name,
      },
    })
  }

  export async function getByName(name:string){
    return prisma.options.findFirst({where:{name}})
  }