
import * as localizationType from "../type/localizationType.js"
import * as localizationRepository from "../repositories/localizationRepository.js"
import * as errorsType from "../utils/errorUtils.js"

export async function getAll(){
    const localization= await localizationRepository.getAll()

    if(localization.length==0)throw errorsType.failNotFound("Localization doesn't exist");

    return localization
}
export async function getAllUserLocation(id:number){

    const localization= await localizationRepository.getAllUserLocation(id)
    if(localization.length==0)throw errorsType.failNotFound("Localization doesn't exist");

    return localization

}
export async function getLocationByRate(userId:number , rateNote:string){

    const localization= await localizationRepository.getLocationByRate(userId , rateNote)
    if(localization.length==0)throw errorsType.failNotFound("Localization doesn't exist");

    return localization

}


export async function getOne(id:number){

    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    const localization =await localizationRepository.getOne(id)

    if(!localization)throw errorsType.failNotFound("Localization doesn't exist");

    return localization
}

export async function insert(localization:localizationType.CreateLocalizationType){
    const localizationExist = await localizationRepository.getByName(localization.name)
    if(localizationExist) throw errorsType.failsConflict("Localization already exist")

    await localizationRepository.insert(localization)
}
export async function toUpdate( id:number , localization:localizationType.CreateLocalizationType){
    const localizationExist = await localizationRepository.getOne(id)
    if(!localizationExist) throw errorsType.failNotFound("Not found option")

    await localizationRepository.toUpdate(id , localization.name)

}

export async function toDelete(id:number){
    if(isNaN(id)) throw errorsType.failNotFound('Id must be a number')
    
    const localizationExist= localizationRepository.getOne(id)

    if(!localizationExist) throw errorsType.failNotFound('Option does not exist')
    await localizationRepository.toDelete(id)
}

