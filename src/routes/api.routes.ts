import { Router } from "express";
import UsersRouter from "./users.router";
import ProfilesRouter from "./profile.router";
import ProjectsRouter from "./projects.router";
import AuthRouter from "./auth.router";
import LinksRouter from "./links.router";
import EmailRouter from "./email.router";

const router = Router();

router.use("/users", UsersRouter);
router.use("/profile", ProfilesRouter);
router.use("/projects", ProjectsRouter);
router.use("/auth", AuthRouter);
router.use("/links", LinksRouter);
router.use("/email", EmailRouter);

export default router;
