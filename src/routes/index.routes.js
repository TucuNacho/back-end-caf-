import productosRoutes from "./productos.routes.js";
import UsuarioRoutes from "./user.routes.js";
import { Router } from "express";

const router = Router();

router.use('/productos', productosRoutes)
router.use('/usuario', UsuarioRoutes)

export default router;
