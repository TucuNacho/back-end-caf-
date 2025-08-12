import { Router } from "express";
import { crearProducto, leerProducto, test } from "../controllers/producto.controllers.js";
const router = Router();
//get, post, put, delete
router.route("/prueba").get(test);
router.route('/').get(leerProducto).post(crearProducto)

export default router;
