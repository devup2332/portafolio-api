import { Router } from "express";
import passport from "passport";
import { CreateAdminController } from "../controllers/users/createAdmin.controller";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetSuperadminController } from "../controllers/users/getSuperAdminProfile";
import { GetUsersController } from "../controllers/users/getUsers.controller";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), GetUsersController);
router.get("/superadmin", passport.authenticate("jwt", { session: false }), GetSuperadminController);
router.post("/", CreaterUserController);
router.post("/admin", passport.authenticate("jwt", { session: false }), CreateAdminController);

export default router;
