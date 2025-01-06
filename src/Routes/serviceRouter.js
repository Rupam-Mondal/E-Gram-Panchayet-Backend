import express from "express";
import { isAuthenticate } from "../middlewares/Authmiddleware.js";
import { createServiceController } from "../Controllers/serviceController.js";
import upload from "../Config/multerConfig.js";

const serviceRouter = express.Router();

serviceRouter.post('/createService', isAuthenticate, upload.single('image'), createServiceController);

export default serviceRouter;