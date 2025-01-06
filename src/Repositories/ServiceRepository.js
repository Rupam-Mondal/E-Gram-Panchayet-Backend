import Service from "../Schema/Service.js";


export async function findServiceById(id) {
    try {
        const response = await Service.findById(id);
        return response;
    } catch (error) {
        throw error;
    }
}
export async function createServiceRepository(ServiceObject) {
    try {
        const response = await Service.create(ServiceObject);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function DeleteServiceRepository(id){
    try {
        const response = await Service.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw error;
    }
}