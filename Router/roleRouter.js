import express from "express";
import { createRole } from "../controller/roleController.js";
import { isAuthorized, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated, isAuthorized);
router.post("/roles", createRole);

export default router;
