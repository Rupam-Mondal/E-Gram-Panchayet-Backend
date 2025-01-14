import { getAllUserService, getUserbyIdService, SigninService, SignupService } from "../Services/Userservice.js";

export async function Signupcontroller(req , res) {
    try {
        const signupObject = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        };
        const code = req.body.code || null;
        const response = await SignupService(signupObject , code);
        if(!response){
            throw null;
        }
        return res.status(201).json({
            success:true,
            message:"Registration successfull",
            data:response
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Invalid input"
        })
    }
}

export async function Signincontroller(req , res){
    try {
        const response = await SigninService({
            username:req.query.username,
            email:req.query.email,
            role:req.query?.role,
            password:req.query.password
        });
        return res.status(200).json({
            success:true,
            message:"Signin successfull",
            data:response
        });
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Credential mismatch"
        })
    }
}

export async function getUserByIdController(req , res){
    try {
        const response = await getUserbyIdService(req.body.userId);
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

export async function getAllUserController(req , res){
    try {
        const response = await getAllUserService();
        return res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Some error occured in user fetching"
        })
    }
}