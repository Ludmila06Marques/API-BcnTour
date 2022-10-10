import Joi from "joi";
import * as userSchemaType from "../type/userType.js"


export const userSchemaSignup = Joi.object<userSchemaType.CreateUserType> ({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(), 
  name:Joi.string().required(), 
  country: Joi.string().required(), 
  urlImage: Joi.string()
  .uri()

});


export const userSchemaLogin = Joi.object<userSchemaType.CreateUserTypeLogin> ({
  email: Joi.string().email().required(),
  password: Joi.string().required(), 
});


