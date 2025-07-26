import express from "express";
import pageControllers from "../../controller/pagesController.js";
const adminPanel = pageControllers.adminPanel;
const router = express.Router();
router
  .route("/")
  .get(adminPanel.getAllAdminPanel)
  .post(adminPanel.createAdminPanel)
  .delete(adminPanel.deleteAdminPanel)
  .put(adminPanel.updateAdminPanel);

export default router;
