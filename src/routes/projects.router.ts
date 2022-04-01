import { Router } from "express";
import passport from "passport";
import { CreateProject } from "../controllers/projects/createProjects.controller";
import { UploadImageController } from "../controllers/projects/uploadImage";
import multer from "../middlewares/multer";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  multer.single("cover"),
  multer.array("image_:ind"),
  CreateProject
);

router.post(
  "/upload-image",
  passport.authenticate("jwt", { session: false }),
  multer.single("image"),
  UploadImageController
);

export default router;
