import { SigninService, SignupService } from "../Services/Userservice.js";

export async function Signupcontroller(req , res) {
    try {
        const signupObject = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        };
        const response = await SignupService(signupObject);
        if(!response){
            throw null;
        }
        return res.status(201).json({
            success:false,
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
            username:req.body.username,
            email:req.body.email,
            role:req.body.role,
            password:req.body.password
        });
        return res.status(200).json({
            success:true,
            message:"Signin successfull",
            data:response
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Credential mismatch"
        })
    }
}