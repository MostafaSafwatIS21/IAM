import pages from "./pages/index.js";
import user from "./userRouter.js";
import role from "./roleRouter.js";
import exports from "./exportRouter.js";
import express from "express";
const router = express.Router();

router.use("/pages", pages);
router.use("/users", user);
router.use("/permissions", role);
router.use("/exports", exports);

router.all("/*splat", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

export default router;
