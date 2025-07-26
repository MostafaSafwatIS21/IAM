import express from "express";
import pageControllers from "../../controller/pagesController.js";
const support = pageControllers.support;
const router = express.Router();
router
  .route("/")
  .get(support.getAllSupport)
  .post(support.createSupport)
  .delete(support.deleteSupport)
  .put(support.updateSupport);
export default router;
