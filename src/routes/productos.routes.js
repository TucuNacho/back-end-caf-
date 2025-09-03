import { Router } from "express";
import { crearProducto, leerProducto, test, leerProductoPorId, borrarProducto, editarProducto } from "../controllers/producto.controllers.js";
import validacionProductos from "../../middlewares/validarProducto.js";
const router = Router();
//get, post, put, delete
router.route("/prueba").get(test);
router.route('/').get(leerProducto).post(validacionProductos, crearProducto)
router.route('/:id').get( leerProductoPorId).delete(borrarProducto).put(validacionProductos, editarProducto)

export default router;
