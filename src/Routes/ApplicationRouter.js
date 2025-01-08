import express from "express";
import { isAuthenticate } from "../middlewares/Authmiddleware.js";
import { AllApplicationOnStatusController, ApplicationController, getApplicationByIdController, UpdateApplicationController } from "../Controllers/ApplicationController.js";
import upload from "../Config/multerConfig.js";

const ApplicationRouter = express.Router();

ApplicationRouter.post('/createApplication', isAuthenticate, upload.array('images' , 3), ApplicationController);
ApplicationRouter.get('/getdetails', isAuthenticate, getApplicationByIdController);
ApplicationRouter.post('/updateApplication', isAuthenticate, UpdateApplicationController);
ApplicationRouter.get('/details/progress', isAuthenticate, AllApplicationOnStatusController);

export default ApplicationRouter;