import { Router } from "express";
import { GetMainProfile } from "../controllers/profile/getMainProfile.controller";

const router = Router();

router.get("/main", GetMainProfile);

export default router;
