import { Router } from "express";
import passport from "passport";
import {CreateAdminUsersController} from "../controllers/users/createAdminUsers.controller";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetSuperAdminProfile } from "../controllers/users/getSuperAdminProfile";
import { GetUsersController } from "../controllers/users/getUsers.controller";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), GetUsersController);
router.get("/superadmin", passport.authenticate("jwt", { session: false }), GetSuperAdminProfile);
router.post("/", CreaterUserController);
router.post("/admin", CreateAdminUsersController);

export default router;
