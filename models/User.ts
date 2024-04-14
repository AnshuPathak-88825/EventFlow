import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt"

const { Schema } = mongoose;

export interface UserAttributes {
    username: string;
    email: string;
    password: string;
}

export interface UserDocument extends UserAttributes, Document {}
export interface UserModel extends Model<UserDocument> {}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
    ,
    name:{
        type:String,
        required:true
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model<UserDocument, UserModel>("User", UserSchema);

export default User;
