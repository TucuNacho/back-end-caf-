import Producto from "../models/producto.js";
export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProducto = async (req, res) => {
  try {
    // buscar todos los productos en la base de datos
    const listaProductos = await Producto.find();
    // enviar la respuesta al front
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};
//agregar funcion para crear productos
export const crearProducto = async (req, res) => {
  try {
    //1- recibir el objeto que tengo que agregar a la BD
    //2- validar los datos del objeto
    //-3 guardar el objeto en la base de datos
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    //-4 enviar respuestas
    res.status(201).json({ mensaje: "El producto fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear producto" });
  }
};
export const leerProductoPorId = async (req, res) => {
  try {
    //1-obtener producto del request
    //2-pedir a mongoose que encuentre el producto con tal id
   const productoBuscado= await Producto.findById(req.params.id)
   if(!productoBuscado){
    return res.status(404).json({mensaje:"Producto no encontrado"})
   }
    //3-contestar al front
    res.status(200).json(productoBuscado)
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Error al obtener producto"})
  }
};
export const borrarProducto = async (req, res) =>{
  try {
    //1- buscar al producto por id y luego borrar
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id)
    if(!productoEliminado){
    return res.status(404).json({mensaje:"Producto no encontrado"})
   }
    //2- responder al front
    res.status(200).json({mensaje:"Producto eliminado correctamente"})

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar producto" });

  }
}

//agregar funcion para editar productos
