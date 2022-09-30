import { Router } from "express";
import userRouter from "./userRoutes.js";
import optionRouter from "./optionRoutes.js";


const router = Router();

router.use(userRouter);
router.use(optionRouter)


export default router;