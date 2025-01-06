import { createServiceService, DeleteServiceService } from "../Services/ServiceService.js";

export async function createServiceController(req , res) {
    try {
        const serviceObject = {
            title: req.body.title,
            description:req.body.description,
            image:req.file.path,
            madeby:req.user.id
        };
        console.log(serviceObject);
        const response = await createServiceService(serviceObject);
        return res.status(201).json({
            success:true,
            message:'Service created successfully',
            data:response
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Service creation failed"
        })
    }
}

export async function DeleteServiceController(req , res){
    try {
        const response = await DeleteServiceService({ 
            serviceId:req.body.serviceId,
            userId:req.user.id
        });
        return res.status(200).json({
            success: true,
            message: 'Service deleted successfully',
            data: response
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Service deletion failed"
        })
    }
}