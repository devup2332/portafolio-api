import { Router } from "express";
import passport from "passport";
import { CreateLinks } from "../controllers/links/createLinks.controller";

const router = Router();

router.post("/", passport.authenticate("jwt", { session: false }), CreateLinks);

export default router;
