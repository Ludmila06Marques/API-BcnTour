import { Options } from "@prisma/client";
import * as publishType from "../type/publishType.js"
import * as publishRepository from "../repositories/publishRepository.js"
import * as userRepository from "../repositories/userRepository.js"
import * as optionRepository from "../repositories/optionRepository.js"
import * as errorsType from "../utils/errorUtils.js"

export async function getAll(){
    const publish= await publishRepository.getAll()

    if(publish.length==0)throw errorsType.failNotFound("Publishes doesn't exist");

    return publish
}

export async function getOne(id:number){

    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    const publish =await publishRepository.getOne(id)

    if(!publish)throw errorsType.failNotFound("Publish doesn't exist");

    return publish
}

export async function insert(publish:publishType.CreatePublishType){
    const userIdExist =await userRepository.findById(publish.userId)
    if(!userIdExist) throw errorsType.failNotFound("User doesnt exist")

    const optionIdExist=await optionRepository.getOne(publish.optionId)
    if(!optionIdExist) throw errorsType.failNotFound("Option doesnt exist")

    const publishFormatted={
        coment:publish.coment,
        urlImage:publish.urlImage,
        rateNote:Number(publish.rateNote),
        userId:publish.userId,
        optionId:publish.optionId
    }

    await publishRepository.insert(publishFormatted)
}

export async function toUpdate(id:number , publish: publishType.CreatePublishTypeInput){
    const publishExist= await publishRepository.getOne(id)
    if(!publishExist) throw errorsType.failNotFound("Not found publish")

    await publishRepository.toUpdate(id , publish)

}

export async function toDelete(id:number){
    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    const publishExist= await publishRepository.getOne(id)
    if(!publishExist) throw errorsType.failNotFound("Not found publish")

    await publishRepository.toDelete(id)
}



