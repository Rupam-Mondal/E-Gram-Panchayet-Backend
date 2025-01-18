import { AllApplicationOnStatusService, createApplicationService, getAllApplicationService, getApplicationByIdService, UpdateApplicationService } from "../Services/ApplicationService.js";


export async function getApplicationByIdController(req , res) {
    try {
        const response = await getApplicationByIdService(req.body.ApplicationId);
        return res.status(200).json({
            success: true,
            message: "Application fetched successfully",
            data: response
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Something went wronge in application fetching"
        })
    }

}
export async function ApplicationController(req , res) {
    try {
        const ApplicationObject = {
            user:req.user.id,
            comment:req.body.comment,
            documents:req.files,
            service: req.body.service
        }
        const response = await createApplicationService(ApplicationObject);
        return res.status(201).json({
            success:true,
            message:"Application created successfully",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Something went wronge in application creation"
        })
    }
}

export async function UpdateApplicationController(req , res) {
    try {
        const Application = await UpdateApplicationService(req.body.id, req.user, req.body.progress);
        return res.status(200).json({
            success:true,
            message:"Application updated successfully",
            data:Application
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Application updation failed",
        })
    }
}

export async function AllApplicationOnStatusController(req , res){
    try {
        console.log(req.query.progress)
        const ObjectDetails = {
            userRole:req.user.role,
            progress:req.query.progress
        };
        const response = await AllApplicationOnStatusService(ObjectDetails);
        return res.status(200).json({
            success:true,
            message:'Applications fetched successfully',
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Error in application fetching"
        });
    }
}

export async function getAllApplicationController(req , res) {
    try {
        const response = await getAllApplicationService();
        return res.status(200).json({
            success:true,
            message:"Applications fetched successfully",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Error in application fetching"
        });
    }
}