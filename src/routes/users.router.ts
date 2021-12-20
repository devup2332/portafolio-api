import { Router } from "express";
import passport from "passport";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetUsersController } from "../controllers/users/getUsers.controller";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), GetUsersController);
router.post("/", passport.authenticate("jwt", { session: false }), CreaterUserController);

export default router;
