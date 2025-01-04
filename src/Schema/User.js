import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


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

UserSchema.pre('save' , function (next) {
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const hashedPassword = bcrypt.hashSync(user.password , salt);
    user.password = hashedPassword;
    next();
});

const User = mongoose.model("User" , UserSchema);
export default User;