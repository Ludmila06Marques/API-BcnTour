import supertest from "supertest";
import index from "../../src/index.js"
import  * as userRepository from "../../src/repositories/userRepository"
import * as userService from "../../src/services/userService"

const server= supertest(index)

describe('Cadastro do usuario', ()=>{
    it("Ja existente " , async()=>{

        const user=  {
            email: "l@l.com",
          password:"123",
          name: "Luds",
          city:"Barcelona",
          country: "Spain",
          urlImage: " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zooplus.pt%2Fmagazine%2Fgatos%2Fgatinhos%2Fcomo-controlar-o-peso-dos-seus-gatinhos&psig=AOvVaw0GmaNinTFrbwJza5TSqDX8&ust=1664566300765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDHsureuvoCFQAAAAAdAAAAABAD"}
       
         

       jest.spyOn(userRepository ,'findUserByEmail').mockImplementationOnce(():any=>{
return{
    id:1,
    email: "l@l.com",
  password:"123",
  name: "Luds",
  city:"Barcelona",
  country: "Spain",
  urlImage: " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zooplus.pt%2Fmagazine%2Fgatos%2Fgatinhos%2Fcomo-controlar-o-peso-dos-seus-gatinhos&psig=AOvVaw0GmaNinTFrbwJza5TSqDX8&ust=1664566300765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDHsureuvoCFQAAAAAdAAAAABAD"}

       })

      
       const promise=    userService.createUser(user)
       expect(promise).rejects.toEqual({ type: "conflict" })
       
    })
})
