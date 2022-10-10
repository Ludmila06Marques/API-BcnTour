import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
let optionsData=[{
    "name": "Ocio",
    "urlImage":"https://i.pinimg.com/736x/37/40/12/3740120ce0b57b6ad19d39139beeaa71.jpg"
  }
,
  {
    "name": "Cultura",
    "urlImage":"https://i.pinimg.com/736x/37/40/12/3740120ce0b57b6ad19d39139beeaa71.jpg"
  },
  {
    "name": "Alimentacion",
    "urlImage":"https://i.pinimg.com/736x/37/40/12/3740120ce0b57b6ad19d39139beeaa71.jpg"
  },
  {
    "name": "Eventos",
    "urlImage":"https://i.pinimg.com/736x/37/40/12/3740120ce0b57b6ad19d39139beeaa71.jpg"
  },
  {
    "name": "Ecoturismo",
    "urlImage":"https://i.pinimg.com/736x/37/40/12/3740120ce0b57b6ad19d39139beeaa71.jpg"
  }]

async function seed (){
   for (const iterator of optionsData) {
    return prisma.options.create({
        data: {
            name:iterator.name,
            urlImage:iterator.urlImage
         }
      })
    
   }
 
}

seed()
.catch(e=>{
    console.log(e)
}).finally(async ()=>{
    await prisma.$disconnect()
})