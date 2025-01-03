import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        type: String,
        required: [true, "Email required"],
        unique: true,
        validate: {
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        }
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    role:{
        type:String,
        enum:['Officer' , 'Staff' , 'User'],
        default:'User'
    }
} , {timestamps:true});

const User = mongoose.model("User" , UserSchema);
export default User;