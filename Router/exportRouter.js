import express from "express";
import { exportCSV } from "../controller/exportController.js";
const router = express.Router();

router.get("/csv", exportCSV);

export default router;
