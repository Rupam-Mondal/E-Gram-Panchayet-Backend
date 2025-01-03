import mongoose from 'mongoose'
import { db_url } from './ServerConfig.js';

async function ConnectDb(){
    try {
        const response = await mongoose.connect(db_url);
        console.log("Database is connected");
        return response;
    } catch (error) {
        console.log("Issue in database connection");
        return null
    }
}

export default ConnectDb;