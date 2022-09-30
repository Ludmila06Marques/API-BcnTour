import { Router } from "express";
import userRouter from "./userRoutes.js";
import optionRouter from "./optionRoutes.js";
import publishRouter from "./publishRoutes.js";


const router = Router();

router.use(userRouter);
router.use(optionRouter)
router.use(publishRouter)


export default router;