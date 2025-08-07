import mongoose, { Model, Schema } from "mongoose";

mongoose.connect("");

const UserSchema=new Schema({

})

export const UserModel=new Model('User',UserSchema)