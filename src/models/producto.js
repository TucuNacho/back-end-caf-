import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 100,
    unique: true,
  },
  precio: {
    type: Number,
    require: true,
    min: 50,
    max: 1000000,
  },
  categoria: {
    type: String,
    require: true,
    enum: ["Infusiones", "Batidos", "Dulces", "Salado"],
  },
  imagen: {
    type: String,
    require: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
          valor
        );
      },
    },
  },
  descripcion_breve: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 250,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 10,
    maxLenght: 500,
  },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
