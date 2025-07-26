import express from "express";
import { register, login, authCallback } from "../controller/userController.js";
import passport from "passport";
import "../config/passport.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login); // Assuming login uses the same controller for now

// auth with google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/callback",
  passport.authenticate("google", { session: false }),
  authCallback
);

export default router;
