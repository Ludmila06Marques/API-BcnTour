import Joi from "joi";
import * as publishSchema from "../type/publishType.js"


export const publishSchemaInput = Joi.object<publishSchema.CreatePublishType> ({
coment:Joi.string().required(),
urlImage:Joi.string().uri(),
localization:Joi.string().required(),
rateNote:Joi.string().required(),
userId:Joi.number().required(),
optionId:Joi.number().required()
});
