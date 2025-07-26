import express from "express";
import pageControllers from "../../controller/pagesController.js";
const notifications = pageControllers.notifications;
const router = express.Router();
router
  .route("/")
  .get(notifications.getAllNotifications)
  .post(notifications.createNotifications)
  .delete(notifications.deleteNotifications)
  .put(notifications.updateNotifications);
export default router;
