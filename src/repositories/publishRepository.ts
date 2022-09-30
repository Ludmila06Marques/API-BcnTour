import { prisma } from "../dbStrategy/db.js"
import * as publishSchema from "../type/publishType.js"

export async function getAll(){
    return prisma.publish.findMany()
}

export async function getOne(id:number) {
    return prisma.publish.findFirst({
      where: {   
        id
      }
    })
  }
  
export async function insert(publish: publishSchema.CreatePublishType) {
    return prisma.publish.create({
      data: {...publish }
    })
  }
  
export async function  toDelete(id: number) {
    return prisma.publish.delete({
      where: { id }
    })
  }
export async function toUpdate(id:number ,publish:publishSchema.CreatePublishTypeInput){
   return prisma.publish.update({
      where: {
       id
      },
      data: {
        coment:publish.coment,
        urlImage:publish.urlImage,
        rateNote:publish.rateNote
      },
    })
  }

