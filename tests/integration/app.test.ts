import { prisma } from "../../src/dbStrategy/db";
import supertest from "supertest";
import index from "../../src/index.js"
import * as theatre from "./factories/theatreFactory.js"



beforeEach(async() => {
    await theatre.execute(); 
  });

  const server= supertest(index)


describe('login do usuario', ()=>{
    it("deve retornar status 422 caso usuario nao esteja cadastrado" , async()=>{

        const user={
            email:"lud@sdriven.com",
            password:"123456"
        }

        const result = await server.post('/login').send(user)

      
       
      

        expect(result.status).toBe(401)//nao autorizado pois usuario nao esta cadastrado
       
    })
})




  afterAll(async () => {
    await prisma.$disconnect();
  });