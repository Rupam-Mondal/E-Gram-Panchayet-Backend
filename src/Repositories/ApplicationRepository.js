import Application from "../Schema/Application.js";

export async function GetAllApplication(){
    try {
        const Applications = await Application.find().populate('user');
        return Applications;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function getApplicationByIdRepository(ApplicationId) {
    try {
        const response = await Application.findById(ApplicationId).populate('user').populate('service');
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
        }).populate('user').populate('service');
        return Applications;
    } catch (error) {
        throw error;
    }
}