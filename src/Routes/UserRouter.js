import express from 'express';
import { Signupcontroller } from '../Controllers/Usercontroller.js';

const userRouter = express.Router();

userRouter.post('/signup' , Signupcontroller);

export default userRouter;