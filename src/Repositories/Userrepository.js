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