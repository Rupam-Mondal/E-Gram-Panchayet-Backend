import { createApplicationService } from "../Services/ApplicationService.js";

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
        return res.json({
            success:false,
            message:"Something went wronge in application creation"
        })
    }
}