import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    progress:{
        type:String,
        enum: ['Applied', 'Reviewed' , 'Done' , 'Failed'],
        require:true,
        default: 'Applied'
    },
    documents:[
        {
            image:{
                type:String,
            }
        }
    ]
});

const Application = mongoose.model("Application" , ApplicationSchema);
export default Application;