import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
        nombreTarea:{
        type: String,
        required: true,
        minLength: 3,
        maxLength:20,
        unique: true,
    }
})
const Tarea = mongoose.model('tarea', tareaSchema)
export default Tarea;