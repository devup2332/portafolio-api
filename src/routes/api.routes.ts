import { Router } from "express";
import UsersRouter from "./users.router";
import ProfilesRouter from "./profile.router";

const router = Router();

router.use("/users", UsersRouter);
router.use("/profile", ProfilesRouter);

export default router;
