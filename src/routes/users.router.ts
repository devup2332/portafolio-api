import { Router } from "express";
import { CreaterUserController } from "../controllers/users/createUser.controller";
import { GetUsersController } from "../controllers/users/getUsers.controller";
import { ValidateToken } from "../middlewares/validateToken.middleware";

const router = Router();

router.get("/", ValidateToken, GetUsersController);
router.post("/", ValidateToken, CreaterUserController);

export default router;
