import express from "express";
import pageControllers from "../../controller/pagesController.js";
const dashboard = pageControllers.dashboard;
const router = express.Router();
router
  .route("/")
  .get(dashboard.getAllDashboards)
  .post(dashboard.createDashboard)
  .delete(dashboard.deleteDashboard)
  .put(dashboard.updateDashboard);
export default router;
