import mongoose, { Schema } from "mongoose";

const userName = new Schema({
  Userame: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  password: {
    type: String,
    requiere: true,
    minLength: 8,
    match: [
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
      "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial",
    ],
  },
  mail: {
    type: String,
    requiere: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      "El email debe tener un formato valido, por ej: juanperez@mail.com",
    ],
  },
});

const Usuario = mongoose.model("usuario", userName);

export default Usuario;
