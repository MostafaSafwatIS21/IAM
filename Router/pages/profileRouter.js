import express from "express";
import pageControllers from "../../controller/pagesController.js";
const profile = pageControllers.profile;
const router = express.Router();
router
  .route("/")
  .get(profile.getAllProfiles)
  .post(profile.createProfile)
  .delete(profile.deleteProfile)
  .put(profile.updateProfile);
export default router;
