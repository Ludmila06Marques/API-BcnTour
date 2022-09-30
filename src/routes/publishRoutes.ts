import { Router } from "express";
import * as publishController from "../controllers/publishController.js"
import { validatePublish } from "../middlewares/validateSchema.js";


const publishRouter = Router();

publishRouter.get("/publish" ,publishController.getAll);
publishRouter.get("/publish/:id" ,publishController.getOne);
publishRouter.post("/publish" , validatePublish, publishController.insert);
publishRouter.put("/publish/:id" , validatePublish, publishController.toUpdate);
publishRouter.delete("/publish/:id" , publishController.toDelete);



export default publishRouter;