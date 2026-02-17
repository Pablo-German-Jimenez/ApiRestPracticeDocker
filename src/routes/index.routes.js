import { Router } from "express";
import routesTasks from "./tasks.routes.js";

const router = Router();

router.use('/tasks',routesTasks)

export default router