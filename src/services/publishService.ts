import { Options } from "@prisma/client";
import * as publishType from "../type/publishType.js"
import * as publishRepository from "../repositories/publishRepository.js"
import * as userRepository from "../repositories/userRepository.js"
import * as optionRepository from "../repositories/optionRepository.js"
import * as localizationRepository from "../repositories/localizationRepository.js"
import * as errorsType from "../utils/errorUtils.js"
import * as userLocalRepository from "../repositories/userLocalizationRepository.js"

export async function getAll(){
    const publish= await publishRepository.getPublishWithUserData()

   // if(publish.length==0)throw errorsType.failNotFound("Publishes doesn't exist");
 

  //  const loclizationOfPublish= await localizationRepository.getOne(publish.localizationId)
 
   return publish

  
}

export async function getOne(id:number){

    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    const publish =await publishRepository.getOne(id)

    if(!publish)throw errorsType.failNotFound("Publish doesn't exist");

    return publish
}

export async function insert(publish:publishType.CreatePublishInput){

    const userIdExist =await userRepository.findById(publish.userId)
    if(!userIdExist) throw errorsType.failNotFound("User doesnt exist")

    const optionIdExist=await optionRepository.getOne(publish.optionId)
    if(!optionIdExist) throw errorsType.failNotFound("Option doesnt exist")

    const localizationExist= await localizationRepository.getByName(publish.localizationName)
    const formatLocalization={
        name:publish.localizationName,
        latitude:publish.localizationLat,
        longitude:publish.localizationLong
    }

    
    if(!localizationExist) await localizationRepository.insert(formatLocalization)


    const localizationName= await localizationRepository.getByName(publish.localizationName)

    const local={
        userId:publish.userId,
        localizationId:localizationName.id

    }
    await userLocalRepository.insert(local)


   

    const publishFormatted={
        coment:publish.coment,
        urlImage:publish.urlImage,
        rateNote:publish.rateNote,
        localizationId:localizationName.id,
        userId:publish.userId,
        optionId:publish.optionId,
        
    }
   
   
    await publishRepository.insert(publishFormatted)
}

export async function toUpdate(id:number , publish: publishType.CreatePublishType){

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

export async function getPublishesByUserId(userId:number){

    const publish = await publishRepository.getPublishesByUserId(userId)
  
    if (!publish) throw errorsType.failNotFound("User dont have publish");
    return publish
}
export async function getPublishesByOption(optionId:number){

    const publish = await publishRepository.getPublishesByOption(optionId)
 
    if (!publish) throw errorsType.failNotFound("Not found publish");
    
    return publish
}

export async function getPublishFromUserByOption(userId:number ,optionId:number){

    const publish = await publishRepository.getPublishFromUserByOption(userId ,optionId)

    if (!publish) throw errorsType.failNotFound("Not found publish");
    return publish
}
export async function toUpdateRate(id:number , rateNote:string){

    const publishExist= await publishRepository.getOne(id)
    if(!publishExist) throw errorsType.failNotFound("Not found publish")

 
    await publishRepository.toUpdateRate(id , rateNote)

}
export async function toUpdateComent(id:number , coment:string){

    const publishExist= await publishRepository.getOne(id)
    if(!publishExist) throw errorsType.failNotFound("Not found publish")

    await publishRepository.toUpdateComent(id , coment)

}
export async function filterPublishByRate(id:number , rateNote:string){

    const user = await userRepository.findById(id)
 
    if (!user) throw errorsType.failNotFound("User dont exist");


    const rates = await publishRepository.filterPublishByRate(id , rateNote)
    
    return rates
}