import express from 'express';
import ConnectDb from './Config/Dbconfig.js';
import userRouter from './Routes/UserRouter.js';
import { isAuthenticate } from './middlewares/Authmiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user' , userRouter);

app.get('/', isAuthenticate , (req , res) => {
    return res.json({message: 'Hello World'});
});

app.listen(3000 , () => {
    console.log('Server is running on port 3000');
    ConnectDb();
});