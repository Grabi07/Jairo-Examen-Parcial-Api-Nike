import { Router } from "express";
import {
  getAllNike,
  getNikeById,
  postNike,
  putNike,
  deleteNike
} from "../controllers/nike.controller.js";

const nike = Router();

nike.get("/", getAllNike);
nike.get("/:id", getNikeById);
nike.post("/", postNike);
nike.put("/:id", putNike);
nike.delete("/:id", deleteNike);

export default nike;
