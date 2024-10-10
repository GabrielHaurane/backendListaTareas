import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionTarea = [
    check("nombreTarea")
    .notEmpty()
    .withMessage("La tarea es un dato obligatorio")
    .isLength({
        min:3,
        max:20,
    })
    .withMessage(
        "La tarea debe contener como minimo 3 y maximo 20 caracteres"
    ),
    (req,res,next)=> resultadoValidacion(req,res,next)
];
export default validacionTarea