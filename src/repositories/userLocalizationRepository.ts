import { UserLocation } from "@prisma/client";
import { prisma } from "../dbStrategy/db.js";


export async function insert(local:any) {
    return prisma.userLocation.create({
      data: {...local }
    })
  }