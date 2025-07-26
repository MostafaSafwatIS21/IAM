import express from "express";
import pageControllers from "../../controller/pagesController.js";
const feedback = pageControllers.feedback;
const router = express.Router();
router
  .route("/")
  .get(feedback.getAllFeedback)
  .post(feedback.createFeedback)
  .delete(feedback.deleteFeedback)
  .put(feedback.updateFeedback);
export default router;
