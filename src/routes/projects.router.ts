import { Router } from "express";
import passport from "passport";
import { CreateProject } from "../controllers/projects/createProjects.controller";
import { DeleteProjectController } from "../controllers/projects/deleteProject.controller";
import { GetProjectsController } from "../controllers/projects/getProjects.controller";
import { UploadImageController } from "../controllers/projects/uploadImage";
import multer from "../middlewares/multer";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  CreateProject
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  DeleteProjectController
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  GetProjectsController
);
router.post(
  "/upload-image",
  passport.authenticate("jwt", { session: false }),
  multer.single("image"),
  UploadImageController
);

export default router;
