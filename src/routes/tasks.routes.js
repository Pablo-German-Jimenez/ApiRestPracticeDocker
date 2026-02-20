import { Router } from "express";
import { createTask , obtener as task } from "../controllers/tasks.controllers.js"


const router = Router()


router.route('/').get(task)
router.route('/').post(createTask)

export default router