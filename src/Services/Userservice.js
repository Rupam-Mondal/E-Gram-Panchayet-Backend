import { createUser, findUserByEmail, getAllUser, getUserByIdRepository } from "../Repositories/Userrepository.js";
import bcrypt from 'bcrypt';
import { createToken } from "../Utils/jwt.js";
import { officer_code, staff_code } from "../Config/ServerConfig.js";

export async function SignupService(SignupObject , code){
    try {
        if(SignupObject.role == 'Officer' || SignupObject.role == 'Staff'){
            if(!code){
                throw null;
            }
            if(SignupObject.role == 'Officer' && code == officer_code){
                const response = await createUser(SignupObject);
                if (!response) {
                    throw null;
                }
                return response;
            }
            else if (SignupObject.role == 'Staff' && code == staff_code){
                const response = await createUser(SignupObject);
                if (!response) {
                    throw null;
                }
                return response;
            }
        }
        else{
            const response = await createUser(SignupObject);
            if (!response) {
                throw null;
            }
            return response;
        }
        return null;
    } catch (error) {
        console.log(error)
        console.log("Some error occured");
        throw error;
    }
}

export async function SigninService(SigninObject){
    try {
        const { email, username, role, password } = SigninObject;
        const user = await findUserByEmail(email);
        if (user.username != username) {
            throw null;
        }
        const response = bcrypt.compareSync(password , user.password);
        if(!response){
            throw null;
        }
        const token = await createToken({ ...SigninObject  , id:user._id});
        return {
            id:user.id,
            email:user.email,
            username:user.username,
            role:user.role,
            token:token
        }

    } catch (error) {
        throw error;
    }
}

export async function getUserbyIdService(id){
    try {
        const response = await getUserByIdRepository(id);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getAllUserService(){
    try {
        const response = await getAllUser();
        return response;
    } catch (error) {
        throw error;
    }
}