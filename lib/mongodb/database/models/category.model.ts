import mongoose, { Schema, model, models } from "mongoose";
import { Document } from "mongoose";
export interface ICategory extends Document{
    _id:string,
    name:string
} 
const categorySchema = new Schema({
    name:{
        type:String,
        required: true,
        unique: true
    }
})

const Category = models.category || model("category", categorySchema)
export default Category;