import { Router } from "express";
import passport from "passport";
import { CreateProject } from "../controllers/projects/createProjects.controller";

const router = Router();

router.post("/", passport.authenticate("jwt", { session: false }), CreateProject);

export default router;
