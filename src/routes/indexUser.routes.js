import usuarioRoutes from "./user.routes.js";
import { Router } from "express";

const router = Router();

router.use('/usuario', usuarioRoutes)

export default router;
