import User from "../Schema/User.js";


export async function getAllUser(){
    try {
        const response = await User.find();
        return response;
    } catch (error) {
        throw error;
    }
}
export async function findUserById(id){
    try {
        const response = await User.findById(id);
        return response;
    } catch (error) {
        throw error;
    }
}

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

export async function getUserByIdRepository(id){
    try {
        const User = await findUserById(id);
        return User;
    } catch (error) {
        throw error;
    }
}