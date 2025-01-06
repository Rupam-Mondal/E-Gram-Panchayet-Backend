import { createServiceRepository } from "../Repositories/ServiceRepository.js";
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