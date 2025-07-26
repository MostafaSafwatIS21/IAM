import express from "express";
import pageControllers from "../../controller/pagesController.js";
const help = pageControllers.help;
const router = express.Router();
router
  .route("/")
  .get(help.getAllHelp)
  .post(help.createHelp)
  .delete(help.deleteHelp)
  .put(help.updateHelp);

export default router;
