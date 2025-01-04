import { createUser } from "../Repositories/Userrepository.js";

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