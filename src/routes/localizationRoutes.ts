import { Router } from "express";
import * as localizationController from "../controllers/localizationController.js"



const localizationRouter = Router();

localizationRouter.get("/localization" ,localizationController.getAll);
localizationRouter.get("/localization/:id" ,localizationController.getOne);
localizationRouter.get("/userLocation/:userId" ,localizationController.getAllUserLocation);
localizationRouter.get("/userLocation/:userId/rate/:rateNote" , localizationController.getLocationByRate);
localizationRouter.post("/localization" ,  localizationController.insert );
localizationRouter.put("/localization/:id" , localizationController.toUpdate);
localizationRouter.delete("/localization/:id" , localizationController.toDelete);



export default localizationRouter;