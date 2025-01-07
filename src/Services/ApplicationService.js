import { createApplicationRepository } from "../Repositories/ApplicationRepository.js";

export async function createApplicationService(Object) {
    try {
        const {user , comment , documents} = Object;
        const ApplicationObject = {
            user:user,
            comment:comment,
            documents:[]
        };

        documents.map((v , i) => {
            const obj = {
                image: v.path
            }
            ApplicationObject.documents.push(obj);
        })

        const response = await createApplicationRepository(ApplicationObject);
        return response;

    } catch (error) {
        throw error;
    }
}