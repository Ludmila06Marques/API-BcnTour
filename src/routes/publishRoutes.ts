import { Router } from "express";
import * as publishController from "../controllers/publishController.js"
import { validatePublish } from "../middlewares/validateSchema.js";
import { validateTokenFunction } from "../middlewares/validateToken.js";


const publishRouter = Router();

publishRouter.get("/publish" ,publishController.getAll);
publishRouter.get("/publish/:id" ,publishController.getOne);
publishRouter.post("/publish" ,validateTokenFunction, validatePublish, publishController.insert);
publishRouter.put("/publish/:id" , validatePublish, publishController.toUpdate);
publishRouter.put("/editPublishRate/:publishId" , publishController.toUpdateRate);
publishRouter.put("/editPublishComent/:publishId" , validateTokenFunction, publishController.toUpdateComent);
publishRouter.delete("/publish/:id" ,validateTokenFunction, publishController.toDelete);
publishRouter.get("/publishUser/:userId" , publishController.getPublishesByUserId);
publishRouter.get("/publishOption/:optionId" , publishController.getPublishesByOption );
publishRouter.get("/publish/:userId/:optionId" ,publishController.getPublishFromUserByOption ) ;
publishRouter.get("/publishByRate/:userId" , validateTokenFunction, publishController.filterPublishByRate ) ;
export default publishRouter;