import { prisma } from "../dbStrategy/db.js"
import * as localizationSchema from "../type/localizationType.js"


export async function getAll() {
    return prisma.localization.findMany()
  }
export async function getAllUserLocation(id:number) {
   return prisma.publish.findMany({where:{userId:id} , select:{rateNote:true , localization:{select:{name:true, latitude:true , longitude:true}} }})
     }

export async function getLocationByRate( userId:number ,rateNote:string){
return prisma.publish.findMany({where:{userId , rateNote} , select:{localization:true} })}
  
  export async function getOne(id:number) {
    return prisma.localization.findFirst({
      where: {   
        id
      }
    })
  }
  
  export async function insert(localization: localizationSchema.CreateLocalizationType) {
    return prisma.localization.create({
      data: {...localization }
    })
  }
  
  export async function  toDelete(id: number) {
    return prisma.localization.delete({
      where: { id }
    })
  }
  export async function toUpdate(id:number , name:string){
   return prisma.localization.update({
      where: {
       id
      },
      data: {
        name,
      },
    })
  }

  export async function getByName(name:string){
    return prisma.localization.findFirst({where:{name}})
  }