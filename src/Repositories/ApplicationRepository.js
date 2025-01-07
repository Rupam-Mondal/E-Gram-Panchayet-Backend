import Application from "../Schema/Application.js";

export async function createApplicationRepository(ApplicationObject){
    try {
        const response = await Application.create(ApplicationObject);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}