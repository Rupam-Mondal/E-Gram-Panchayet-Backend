import Service from "../Schema/Service.js";

export async function createServiceRepository(ServiceObject) {
    try {
        const response = await Service.create(ServiceObject);
        return response;
    } catch (error) {
        throw error;
    }
}