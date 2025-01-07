import { createApplicationService, getApplicationByIdService } from "../Services/ApplicationService.js";


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
            documents:req.files
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