import express from "express";
import pageControllers from "../../controller/pagesController.js";
const settings = pageControllers.settings;
const router = express.Router();
router
  .route("/")
  .get(settings.getAllSettings)
  .post(settings.createSettings)
  .delete(settings.deleteSettings)
  .put(settings.updateSettings);
export default router;
