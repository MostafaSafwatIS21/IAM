import express from "express";
import pageControllers from "../../controller/pagesController.js";
const reports = pageControllers.reports;
const router = express.Router();
router
  .route("/")
  .get(reports.getAllReports)
  .post(reports.createReports)
  .delete(reports.deleteReports)
  .put(reports.updateReports);
export default router;
