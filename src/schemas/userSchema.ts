import Joi from "joi";
import * as userSchemaType from "../type/userType.js"


export const userSchema = Joi.object<userSchemaType.CreateUserType> ({
  email: Joi.string().email().required(),
  password: Joi.string().required(), 
  name:Joi.string().required(), 
  city:Joi.string().required(), 
  country: Joi.string().required(), 
  urlImage: Joi.string()
  .uri()

});