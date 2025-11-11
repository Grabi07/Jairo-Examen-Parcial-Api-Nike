import Nike from "../models/nike.model.js";
import mongoose from "mongoose";


export const getAllNike = async (req, res) => {
  console.log("👟 Obteniendo todos los productos Nike");
  try {
    const productos = await Nike.find({}, { __v: 0 });
    if (productos.length === 0) {
      return res.status(404).json({ msg: "No hay productos Nike registrados" });
    }
    res.status(200).json({ productos });
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los productos" });
  }
};


export const getNikeById = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "ID no válido" });
    }
    const producto = await Nike.findById(id);
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }
    res.status(200).json({ producto });
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el producto" });
  }
};


export const postNike = async (req, res) => {
  console.log("🛍️ Agregando nuevo producto Nike");
  try {
    const nuevoProducto = new Nike(req.body);
    await nuevoProducto.save();
    res.status(201).json({
      msg: "Producto agregado correctamente",
      producto: nuevoProducto
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al guardar el producto" });
  }
};


export const putNike = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "ID no válido" });
    }
    const actualizado = await Nike.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!actualizado) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }
    res.status(200).json({ msg: "Producto actualizado", producto: actualizado });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el producto" });
  }
};


export const deleteNike = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "ID no válido" });
    }
    const eliminado = await Nike.findByIdAndDelete(id);
    if (!eliminado) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }
    res.status(200).json({ msg: "Producto eliminado correctamente", producto: eliminado });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar el producto" });
  }
};
