import { Request,Response } from "express"
import * as publishService from "../services/publishService.js"
import* as publishType from "../type/publishType.js"

export async function getAll(req:Request ,res:Response){

    const result = await publishService.getAll()
    res.send(result).status(200)//sucess
}

export async function getOne(req:Request ,res:Response){
    const id= parseInt(req.params.id)

    const result= await publishService.getOne(id)

    res.send(result).status(200)//sucess

}

export async function insert(req:Request ,res:Response) {
    const publish:publishType.CreatePublishType=req.body
    
    await publishService.insert(publish)
    res.sendStatus(201)//created
}

export async function toDelete(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    await publishService.toDelete(id)
    res.sendStatus(200)//sucess

}

export async function toUpdate(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    const publish:publishType.CreatePublishTypeInput= req.body

    await publishService.toUpdate(id ,publish)
    res.sendStatus(200)//sucess
}