import User from "../Schema/User.js";

export async function createUser(Userobject){
    try {
        const response = await User.create(Userobject);
        return response;
    } catch (error) {
        console.log("User registration failed");
        return null;
    }
}

export async function findUserByEmail(email){
    try {
        const response = await User.findOne({email});
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}