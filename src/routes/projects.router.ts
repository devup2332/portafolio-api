import { Router } from "express";
import passport from "passport";
import { CreateProject } from "../controllers/projects/createProjects.controller";
import multer from "../middlewares/multer";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  multer.single("cover"),
  CreateProject
);

export default router;
