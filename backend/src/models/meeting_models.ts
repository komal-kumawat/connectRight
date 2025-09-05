import mongoose, { Document, Schema } from "mongoose";

interface IMeeting extends Document{
    user_id:string,
    meetingCode:string,
    date:Date
}

const meetingSchema = new Schema<IMeeting>({
   user_id:{type:String},
   meetingCode:{type:String , required:true},
   date:{type:Date , default:Date.now , required:true}

})

const Meeting = mongoose.model<IMeeting>("Meeting" ,meetingSchema);
export {Meeting};