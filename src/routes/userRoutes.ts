import { Router } from "express";
import * as userController from "../controllers/userControllers"

const userRouter = Router();

userRouter.post("/login" , userController.login);
userRouter.post("/sign-up" ,userController.signup);

export default userRouter;