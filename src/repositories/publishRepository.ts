import { prisma } from "../dbStrategy/db.js"
import * as publishSchema from "../type/publishType.js"


export async function getAll(){
    return prisma.publish.findMany({select:{
      id:true,
      coment:true,
      rateNote:true,
      urlImage:true,
      userId:true,
      option:true,
      localizationId:true
    }

    })
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
export async function toUpdate(id:number ,publish:publishSchema.CreatePublishType){
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

export async function getPublishesByUserId(userId:number){

  return prisma.publish.findMany({where:{
    userId
  }, select:{
    id:true,
    coment:true,
    urlImage:true,
    rateNote:true,
    localization:true,
    user:{select:{
      id:true,
      name:true,
      urlImage:true
    }}
  }})
}
export async function getPublishesByOption(optionId:number){

  return prisma.publish.findMany({where:{
    optionId
  }, select:{
    coment:true,
    urlImage:true,
    rateNote:true,
    localization:true,
    user:{select:{
      id:true,
      name:true,
      urlImage:true
    }}
  }})
}
export async function getPublishFromUserByOption(userId:number , optionId:number){

  return prisma.publish.findMany({where:{
    optionId, userId
  }, select:{
    coment:true,
    urlImage:true,
    rateNote:true,
    localization:true,
    user:{select:{
      id:true,
      name:true,
      urlImage:true
    }}
  }})
}

export async function getPublishWithUserData(){

  return prisma.publish.findMany({select:{
    id:true,
    coment:true,
    urlImage:true,
    rateNote:true,
    localization:true,
    user:{select:{
      id:true,
      name:true,
      urlImage:true
    }}
  }})
}