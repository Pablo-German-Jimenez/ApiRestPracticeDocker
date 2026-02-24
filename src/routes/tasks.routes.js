import { Router } from "express";
import { createTask , eliminarTarea, obtener as task } from "../controllers/tasks.controllers.js"


const router = Router()


router.route('/').get(task)
router.route('/').post(createTask)
router.delete('/tasks/:id', eliminarTarea);
d