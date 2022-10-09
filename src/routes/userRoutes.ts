import { Router } from "express";
import * as userController from "../controllers/userControllers.js"
import * as validator from "../middlewares/validateSchema.js"
const userRouter = Router();

userRouter.post("/login" , validator.validateLogin, userController.login);
userRouter.post("/sign-up" ,validator.validateSignup,userController.signup);
userRouter.get("/user/:id" ,userController.geById);
userRouter.delete("/user/:id", userController.deleteUser)
userRouter.put("/user/:id" , userController.toUpdate);
userRouter.put("/userInfo/:id/" , userController.toUpdateInfo);
userRouter.put("/userName/:id/" , userController.toUpdateName);
userRouter.put("/userCountry/:id/",userController.toUpdateCountry);
userRouter.put("/userPhoto/:id/", userController.toUpdatePhoto);
export default userRouter;