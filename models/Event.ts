import { ObjectId } from "mongodb";
import mongoose,{Document,Model} from "mongoose";
import { Schema } from "mongoose";
import User from "./User";
export interface EventAttributes
{
    title:String,
    description:String,
    time:Date,
    venue:String,
    admin:Schema.Types.ObjectId
    md:String,
    attendees: [{
        _id: false,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User' 
        },
        name: String,
        email: String,
        phone: String,
        attended: {
            type: Boolean,
            default: false
        }
    }]
}
export interface EvnetDocument extends EventAttributes, Document {}
export interface EventModel extends Model<EvnetDocument> {}
const EventModeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    admin: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    md: {
        type: String,
        required: true
    },
    attendees: [{
        _id: false,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User' 
        },
        name: String,
        email: String,
        phone: String,
        attended: {
            type: Boolean,
            default: false
        }
    }]
});
const EventMode = mongoose.models.EventMode || mongoose.model<EventAttributes,EventModel>("User", EventModeSchema);

export default EventMode;
