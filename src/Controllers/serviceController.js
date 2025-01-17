import { createServiceService, DeleteServiceService, getAllServiceService, getServiceByIdService } from "../Services/ServiceService.js";

export async function createServiceController(req , res) {
    try {
        const serviceObject = {
            title: req.body.title,
            description:req.body.description,
            image:req.file.path,
            madeby:req.user.id
        };
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

export async function getAllServiceController(req , res) {
    try {
        const response = await getAllServiceService();
        return res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Some error occured"
        })
    }
}

export async function getServiceByIdController(req , res){
    try {
        const response = await getServiceByIdService(req.query.serviceId);
        return res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Some error occured"
        })
    }
}