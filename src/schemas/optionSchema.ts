import Joi from "joi";
import * as optionSchema from "../type/optionType.js"


export const optionSchemaInput = Joi.object<optionSchema.CreateOptionType> ({
name:Joi.string().required(),
urlImage:Joi.string().required()

});