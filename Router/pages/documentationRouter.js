import express from "express";
import pageControllers from "../../controller/pagesController.js";
const documentation = pageControllers.documentation;
const router = express.Router();
router
  .route("/")
  .get(documentation.getAllDocumentation)
  .post(documentation.createDocumentation)
  .delete(documentation.deleteDocumentation)
  .put(documentation.updateDocumentation);
export default router;
