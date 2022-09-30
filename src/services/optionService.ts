import { Options } from "@prisma/client";
import * as optionType from "../type/optionType.js"
import * as optionRepository from "../repositories/optionRepository.js"
import * as errorsType from "../utils/errorUtils.js"

export async function getAll(){
    const option= await optionRepository.getAll()

    if(option.length==0)throw errorsType.failNotFound("Options doesn't exist");

    return option
}

export async function getOne(id:number){

    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    const option =await optionRepository.getOne(id)

    if(!option)throw errorsType.failNotFound("Option doesn't exist");

    return option
}

export async function insert(option:optionType.CreateOptionType){
    const optionExist = await optionRepository.getByName(option.name)
    if(optionExist) throw errorsType.failsConflict("Option already exist")

    await optionRepository.insert(option)
}
export async function toUpdate( id:number , option:optionType.CreateOptionType){
    const optionExist = await optionRepository.getOne(id)
    if(!optionExist) throw errorsType.failNotFound("Not found option")

    await optionRepository.toUpdate(id , option.name)

}

export async function toDelete(id:number){
    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    
    const optionExist= optionRepository.getOne(id)

    if(!optionExist) throw errorsType.failNotFound('Option does not exist')
    await optionRepository.toDelete(id)
}

