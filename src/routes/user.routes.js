import { Router } from "express";
import { borrarUsuario, crearUsuario,editarUsuario, leerUserPorId, leerUsuario } from "../controllers/user.controllers.js";
const router = Router();
router.route('/').get(leerUsuario).post(crearUsuario)
router.route('/:id').get( leerUserPorId).delete(borrarUsuario).put(editarUsuario)

export default router;
