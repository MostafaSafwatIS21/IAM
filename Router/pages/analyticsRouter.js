import express from "express";
import pageControllers from "../../controller/pagesController.js";
const analytics = pageControllers.analytics;
const router = express.Router();
router
  .route("/")
  .get(analytics.getAllAnalytics)
  .post(analytics.createAnalytics)
  .delete(analytics.deleteAnalytics)
  .put(analytics.updateAnalytics);
export default router;
