import { Request,Response } from "express"
import * as optionService from "../services/optionService.js"
import* as optionType from "../type/optionType.js"

export async function getAll(req:Request ,res:Response){

    const result = await optionService.getAll()
    res.send(result).status(200)//sucess
}

export async function getOne(req:Request ,res:Response){
    const id= parseInt(req.params.id)

    const result= await optionService.getOne(id)

    res.send(result).status(200)//sucess

}

export async function insert(req:Request ,res:Response) {
    const option:optionType.CreateOptionType=req.body

    await optionService.insert(option)
    res.sendStatus(201)//created
}

export async function toDelete(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    await optionService.toDelete(id)
    res.sendStatus(200)//sucess

}

export async function toUpdate(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    const option:optionType.CreateOptionType= req.body

    await optionService.toUpdate(id ,option)
    res.sendStatus(200)//sucess
}