import { Router } from "express";
import * as optionController from "../controllers/optionController.js"
import { validateOption } from "../middlewares/validateSchema.js";


const optionRouter = Router();

optionRouter.get("/option" ,optionController.getAll);
optionRouter.get("/option/:id" ,optionController.getOne);
optionRouter.post("/option" , validateOption, optionController.insert );
optionRouter.put("/option/:id" , validateOption, optionController.toUpdate);
optionRouter.delete("/option/:id" , optionController.toDelete);



export default optionRouter;