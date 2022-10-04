import { Request,Response } from "express"
import * as localizationService from "../services/localizationService.js"
import* as localizationType from "../type/localizationType.js"

export async function getAll(req:Request ,res:Response){

    const result = await localizationService.getAll()
    res.send(result).status(200)//sucess
}
export async function getAllUserLocation(req:Request ,res:Response){
    const id= parseInt(req.params.userId)
    const result = await localizationService.getAllUserLocation(id)
    res.send(result).status(200)//sucess
}

export async function getOne(req:Request ,res:Response){
    const id= parseInt(req.params.id)

    const result= await localizationService.getOne(id)

    res.send(result).status(200)//sucess

}

export async function insert(req:Request ,res:Response) {
    const localization:localizationType.CreateLocalizationType=req.body

    await localizationService.insert(localization)
    res.sendStatus(201)//created
}

export async function toDelete(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    await localizationService.toDelete(id)
    res.sendStatus(200)//sucess

}

export async function toUpdate(req:Request ,res:Response){
    const id= parseInt(req.params.id)
    const localization:localizationType.CreateLocalizationType= req.body

    await localizationService.toUpdate(id ,localization)
    res.sendStatus(200)//sucess
}