import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    madeby:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Service = mongoose.model("Service" , serviceSchema);
export default Service;