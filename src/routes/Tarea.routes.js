import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas} from "../controllers/tarea.controllers.js";

const tareaRouter = Router();
tareaRouter.route('/tarea').post(crearTarea).get(listarTareas)
tareaRouter.route('/tarea/:id').delete(borrarTarea).put(editarTarea)

export default tareaRouter;