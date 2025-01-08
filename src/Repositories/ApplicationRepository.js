import Application from "../Schema/Application.js";

export async function getApplicationByIdRepository(ApplicationId) {
    try {
        const response = await Application.findById(ApplicationId).populate('user');
        return response;
    } catch (error) {
        throw error;
    }
}

export async function createApplicationRepository(ApplicationObject){
    try {
        const response = await Application.create(ApplicationObject);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function AllApplicationOnProgressRepo(progress){
    try {
        const Applications = await Application.find({
            progress:progress
        });
        return Applications;
    } catch (error) {
        throw error;
    }
}