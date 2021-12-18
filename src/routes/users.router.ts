import { Router } from "express";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetUsersController } from "../controllers/users/getUsers.controller";

const router = Router();

router.get("/", GetUsersController);
router.post("/", CreaterUserController);

export default router;
