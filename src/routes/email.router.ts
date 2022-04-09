import { Router } from "express";
import { SendEmailController } from "../controllers/email/sendEmail.controller";

const router = Router()

router.post('/send',SendEmailController)

export default router
