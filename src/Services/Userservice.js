import { createUser, findUserByEmail, getUserByIdRepository } from "../Repositories/Userrepository.js";
import bcrypt from 'bcrypt';
import { createToken } from "../Utils/jwt.js";

export async function SignupService(SignupObject){
    try {
        const response = await createUser(SignupObject);
        if(!response){
            throw null;
        }
        return response;
    } catch (error) {
        console.log("Some error occured");
        return null;
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