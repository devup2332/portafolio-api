import { Router } from "express";
import passport from "passport";
import { CreateAdminController } from "../controllers/users/createAdmin.controller";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetSuperadminController } from "../controllers/users/getSuperAdminProfile";
import { GetUsersController } from "../controllers/users/getUsers.controller";
import { UpdateUserController } from "../controllers/users/updateUser.controller";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  GetUsersController
);
router.get(
  "/superadmin",
  passport.authenticate("jwt", { session: false }),
  GetSuperadminController
);
router.post("/", CreaterUserController);
router.post(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  CreateAdminController
);
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  UpdateUserController
);

export default router;
