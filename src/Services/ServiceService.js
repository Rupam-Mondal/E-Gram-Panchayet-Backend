import { createServiceRepository, DeleteServiceRepository, findServiceById } from "../Repositories/ServiceRepository.js";
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
        console.log(service.madeby.toString())
        console.log(userId)
        if(service.madeby.toString().trim() != userId.trim()){
            throw null;
        }
        console.log('hey')
        const response = await DeleteServiceRepository(id);
        console.log(response)
        return response;

    } catch (error) {
        throw error;
    }
}