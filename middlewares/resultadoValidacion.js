import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    const errores = validationResult(req)
    // errorres.isEmpty()true= todo salio bien, no hay errores en la validacion
    // errorres.isEmpty()false= hay errores de validacion
    if(!errores.isEmpty()){
       return res.status(400).json(errores.array())
    }
    next()
}

export default resultadoValidacion
