import express from "express";
import { isAuthenticate } from "../middlewares/Authmiddleware.js";
import { ApplicationController, getApplicationByIdController } from "../Controllers/ApplicationController.js";
import upload from "../Config/multerConfig.js";

const ApplicationRouter = express.Router();

ApplicationRouter.post('/createApplication', isAuthenticate, upload.array('images' , 3), ApplicationController);
ApplicationRouter.get('/getdetails', isAuthenticate, getApplicationByIdController);

export default ApplicationRouter;