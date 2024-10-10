import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas} from "../controllers/tarea.controllers.js";
import validacionTarea from "../helpers/validacionTarea.js";

const tareaRouter = Router();
tareaRouter.route('/tarea').post([validacionTarea],crearTarea).get(listarTareas)
tareaRouter.route('/tarea/:id').delete(borrarTarea).put(editarTarea)

export default tareaRouter;