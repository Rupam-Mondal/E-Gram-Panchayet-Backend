import express from "express";
import { isAuthenticate } from "../middlewares/Authmiddleware.js";
import { createServiceController, DeleteServiceController, getAllServiceController, getServiceByIdController } from "../Controllers/serviceController.js";
import upload from "../Config/multerConfig.js";

const serviceRouter = express.Router();

serviceRouter.post('/createService', isAuthenticate, upload.single('image'), createServiceController);
serviceRouter.post('/deleteService', isAuthenticate, DeleteServiceController);
serviceRouter.get('/getAllService', isAuthenticate, getAllServiceController);
serviceRouter.get('/getServiceById', isAuthenticate, getServiceByIdController);

export default serviceRouter;