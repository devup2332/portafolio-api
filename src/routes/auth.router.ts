import { Router } from "express";
import { LoginUserController } from "../controllers/auth/login.controllert";

const router = Router();

router.post("/login", LoginUserController);

export default router;
