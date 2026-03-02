import { Router } from "express";
import routesTasks from "./tasks.routes.js";
import userRoutes from "./user.routes.js";
import { listarUsers } from "../controllers/users.controllers.js";

const router = Router();

router.use('/tasks',routesTasks)
router.use('/users',userRoutes)
router.use('/users',listarUsers)


export default router