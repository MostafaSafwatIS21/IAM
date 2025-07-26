import adminPanel from "./adminPanelRouter.js";
import support from "./supportRouter.js";
import settings from "./settingsRouter.js";
import profile from "./profileRouter.js";
import dashboard from "./dashboardRouter.js";
import analytics from "./analyticsRouter.js";
import help from "./helpRouter.js";
import reports from "./reportsRouter.js";
import feedback from "./feedbackRouter.js";
import notifications from "./notificationsRouter.js";
import documentation from "./documentationRouter.js";
import express from "express";

import { isAuthenticated, isAuthorized } from "../../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated, isAuthorized);
router.use("/help", help);
router.use("/analytics", analytics);
router.use("/reports", reports);
router.use("/feedback", feedback);
router.use("/notifications", notifications);
router.use("/documentation", documentation);
router.use("/adminPanel", adminPanel);
router.use("/support", support);
router.use("/settings", settings);
router.use("/profile", profile);
router.use("/dashboard", dashboard);
router.all("/*splat", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

export default router;
