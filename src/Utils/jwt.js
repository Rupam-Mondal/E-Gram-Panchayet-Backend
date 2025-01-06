import jwt from 'jsonwebtoken';
import { jwt_secret_key } from '../Config/ServerConfig.js';

export async function createToken(userObject){
    return jwt.sign(userObject , jwt_secret_key , {expiresIn:'1d'});
}