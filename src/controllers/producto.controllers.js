export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProducto=(req, res)=>{

}
//agregar funcion para crear productos
export const crearProducto= async (req, res)=>{
  try {
     //1- recibir el objeto que tengo que agregar a la BD
     console.log(req.body);

    //2- validar los datos del objeto
    //-3 guardar el objeto en la base de datos
    //-4 enviar respuestas
  } catch (error) {
    console.error(error);

  }

}
//agregar funcion para editar productos
