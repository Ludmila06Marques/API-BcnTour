import { prisma } from "../../../src/dbStrategy/db";


export async function execute() {
    await prisma.$transaction([
     
        prisma.$executeRaw`TRUNCATE TABLE users CASCADE `
     
    
    
     
    ]);
  }

