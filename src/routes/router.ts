import { Router } from "express";
import userRouter from "./userRoutes.js";
import optionRouter from "./optionRoutes.js";
import publishRouter from "./publishRoutes.js";
import localizationRouter from "./localizationRoutes.js";


const router = Router();

router.use(userRouter);
router.use(optionRouter)
router.use(publishRouter)
router.use(localizationRouter)


export default router;