import { UserLocation } from "@prisma/client";

import { prisma } from "../dbStrategy/db.js";


export async function insert(local:any) {
    return prisma.userLocation.create({
      data: {...local }
    })
  }
  export async function getByUserId(userId:number) {
    return prisma.userLocation.findMany({
    where:{userId}
    })
  }

  
  export async function toDelete(userId:number) {
    return prisma.userLocation.deleteMany({
    where:{userId}
    })
  }


