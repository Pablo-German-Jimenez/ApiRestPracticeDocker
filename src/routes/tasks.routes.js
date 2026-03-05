import { Router } from "express";
import { createTask , eliminarTarea,obtenerTodasLasTareas } from "../controllers/tasks.controllers.js"
import validarJWT from "../middlewares/validarTokens.js";
import generarJWT from "../middlewares/generarJWT.js";
const router = Router()


router.route('/').get(obtenerTodasLasTareas)
router.route('/').post(generarJWT,validarJWT,createTask)
router.delete('/tasks/:id', eliminarTarea);
export default router;