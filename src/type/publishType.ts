import { Publish } from "@prisma/client"

export type CreatePublishType= Omit <Publish , "id" | "createdAt">


export type CreatePublishInput={
    coment:string
    urlImage:string,
    rateNote:string, 
    localizationName:string,
    localizationLat:string,
    localizationLong:string,
    userId:number,
    optionId:number
}