import resultadoValidacion from "./resultadoValidacion.js";

import  { body } from "express-validator";

const validacionProductos = [
    body("nombreProducto").notEmpty().withMessage("El nombre del producto es obligatorio"),
    body("precio").notEmpty(),
    (req, res, next) => resultadoValidacion(req, res, next)
];


export default validacionProductos;
