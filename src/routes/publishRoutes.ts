import { Router } from "express";
import * as publishController from "../controllers/publishController.js"
import { validatePublish } from "../middlewares/validateSchema.js";


const publishRouter = Router();

publishRouter.get("/publish" ,publishController.getAll);
publishRouter.get("/publish/:id" ,publishController.getOne);
publishRouter.post("/publish" , validatePublish, publishController.insert);
publishRouter.put("/publish/:id" , validatePublish, publishController.toUpdate);
publishRouter.put("/editPublishRate/:id" , publishController.toUpdateRate);
publishRouter.put("/editPublishComent/:id" , publishController.toUpdateComent);
publishRouter.delete("/publish/:id" , publishController.toDelete);
publishRouter.get("/publishUser/:userId" , publishController.getPublishesByUserId);
publishRouter.get("/publishOption/:optionId" , publishController.getPublishesByOption );
publishRouter.get("/publish/:userId/:optionId" ,publishController.getPublishFromUserByOption ) ;
export default publishRouter;