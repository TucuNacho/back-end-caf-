import { Router } from "express";
import { test } from "../controllers/producto.controllers.js";
const router = Router();
//get, post, put, delete
router.route("/prueba").get(test);

export default router;
