import { Router } from "express";
import nike from "./nike.routes.js";

const indexRoutes = Router();

indexRoutes.use("/nike", nike);

export default indexRoutes;

