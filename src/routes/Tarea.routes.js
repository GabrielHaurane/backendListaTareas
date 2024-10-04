import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas, obtenerTareas } from "../controllers/tarea.controllers";

const tareaRouter = Router();
tareaRouter.route('/tarea').post(crearTarea).get(listarTareas)
tareaRouter.route('/tarea/:id').get(obtenerTareas).delete(borrarTarea).put(editarTarea)

export default tareaRouter;