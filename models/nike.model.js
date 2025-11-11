import mongoose from "mongoose";

const nikeSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true // Ej: "Zapatillas", "Ropa", "Accesorios"
  },
  talla: {
    type: String,
    required: false
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  disponible: {
    type: Boolean,
    default: true
  }
});

const Nike = mongoose.model("Nike", nikeSchema);

export default Nike;

