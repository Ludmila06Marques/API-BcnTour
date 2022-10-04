import Joi from "joi";
import * as publishSchema from "../type/publishType.js"


export const publishSchemaInput = Joi.object ({
coment:Joi.string().required(),
urlImage:Joi.string().uri(),
rateNote:Joi.string().required(), 
localizationName:Joi.string().required(),
localizationLat:Joi.required(),
localizationLong:Joi.required(),
userId:Joi.number().required(),
optionId:Joi.number().required()
});
