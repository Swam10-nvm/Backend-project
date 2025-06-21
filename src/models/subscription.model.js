import mongoose,{Schema} from "mongoose";

const subsciptionSchema=new Schema({
    subscriber:{
        type:Schema.Types.ObjectsId,
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timrstamps:true})

export const Subsciption=mongoose.model("Subsciption",subsciptionSchema)