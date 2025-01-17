import { AllApplicationOnProgressRepo, createApplicationRepository, GetAllApplication, getApplicationByIdRepository } from "../Repositories/ApplicationRepository.js";


export async function getApplicationByIdService(id) {
    try {
        const response = await getApplicationByIdRepository(id);
        return response;
    } catch (error) {
        throw error;
    }
}
export async function createApplicationService(Object) {
    try {
        const { user, comment, documents, service } = Object;
        const ApplicationObject = {
            user:user,
            comment:comment,
            service: service,
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

export async function UpdateApplicationService(id, user, progress){
    try {
        if(user.role != 'Officer' && user.role == 'Staff'){
            throw null;
        }
        const Application = await getApplicationByIdRepository(id);
        if (!Application) throw null;
        Application.progress = progress;
        const updateResponse = await Application.save();
        return updateResponse;
    } catch (error) {
        throw error;
    }
}

export async function AllApplicationOnStatusService(ApplicationObject) {
    try {
        const { userRole, progress } = ApplicationObject;
        // if(userRole != 'Officer' && userRole != 'Staff'){
        //     throw null;
        // }
        // console.log("Here");
        const response = await AllApplicationOnProgressRepo(progress);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getAllApplicationService(){
    try {
        const response = await GetAllApplication();
        return response;
    } catch (error) {
        throw error;
        
    }
}