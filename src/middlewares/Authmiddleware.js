import { findUserByEmail } from "../Repositories/Userrepository.js";
import { verifyToken } from "../Utils/jwt.js";

export async function isAuthenticate(req , res , next){
    try {
        const token = req.headers['x-access-token'];
        if(!token){
            return res.status(200).json({
                success:false,
                message:'Token is missing'
            });
        }
        const response = await verifyToken(token);
        if(!response){
            throw null;
        }
        const usercheck = await findUserByEmail(response.email);
        if(!usercheck){
            throw null;
        }
        req.user = response;
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Unauthorised user"
        })
    }
}