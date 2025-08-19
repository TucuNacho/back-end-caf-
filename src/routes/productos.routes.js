import { Router } from "express";
import { crearProducto, leerProducto, test, leerProductoPorId, borrarProducto } from "../controllers/producto.controllers.js";
const router = Router();
//get, post, put, delete
router.route("/prueba").get(test);
router.route('/').get(leerProducto).post(crearProducto)
router.route('/:id').get( leerProductoPorId).delete(borrarProducto)

export default router;
