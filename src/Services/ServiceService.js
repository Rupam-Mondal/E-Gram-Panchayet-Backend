import { createServiceRepository, DeleteServiceRepository, findServiceById, getAllService } from "../Repositories/ServiceRepository.js";
import { findUserById } from "../Repositories/Userrepository.js";

export async function createServiceService(createServiceObject){
    try {
        const { title, description, image, madeby } = createServiceObject;
        const User = await findUserById(madeby);
        if(User.role != 'Officer'){
            throw null;
        }
        const response = await createServiceRepository(createServiceObject);
        return response;
    } catch (error) {
        throw error;
    }
}
export async function DeleteServiceService({serviceId , userId}) {
    try {
        const service = await findServiceById(serviceId);
        if(service.madeby != userId){
            throw null;
        }
        const response = await DeleteServiceRepository(service._id);
        return response;

    } catch (error) {
        throw error;
    }
}

export async function getAllServiceService() {
    try {
        const response = await getAllService();
        return response;
    } catch (error) {
        throw error;
    }
}