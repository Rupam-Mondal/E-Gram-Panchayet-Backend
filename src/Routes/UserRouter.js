import express from 'express';
import { getAllUserController, getUserByIdController, Signincontroller, Signupcontroller } from '../Controllers/Usercontroller.js';
import { isAuthenticate } from '../middlewares/Authmiddleware.js';

const userRouter = express.Router();

userRouter.post('/signup' , Signupcontroller);
userRouter.get('/signin', Signincontroller);
userRouter.get('/userdetails', isAuthenticate, getUserByIdController);
userRouter.get('/allusers', isAuthenticate, getAllUserController);

export default userRouter;