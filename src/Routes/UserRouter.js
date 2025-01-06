import express from 'express';
import { Signincontroller, Signupcontroller } from '../Controllers/Usercontroller.js';

const userRouter = express.Router();

userRouter.post('/signup' , Signupcontroller);
userRouter.get('/signin', Signincontroller);

export default userRouter;