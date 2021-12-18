import {Router} from "express";
import UsersRouter from './users.router'

const router = Router()

router.use('/users',UsersRouter)

export default router
