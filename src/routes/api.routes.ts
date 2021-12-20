import { Router } from "express";
import UsersRouter from "./users.router";
import ProfilesRouter from "./profile.router";
import ProjectsRouter from "./projects.router";
import AuthRouter from "./auth.router";

const router = Router();

router.use("/users", UsersRouter);
router.use("/profile", ProfilesRouter);
router.use("/projects", ProjectsRouter);
router.use("/auth", AuthRouter);

export default router;
