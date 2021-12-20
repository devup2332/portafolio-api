import { Request, Response } from "express";
import pool from "../../database";

const roles = ["admin", "user"];
export const CreaterUserController = async (req: Request, res: Response) => {
    try {
        const { username, password, fullname, role, description, phone } = req.body;
        const [rolUser] = roles.filter((rol) => {
            return rol === role;
        });
        if (!rolUser)
            return res.status(400).json({
                message: "Invalid Role",
                status: 400,
            });
        const newUser = {
            username,
            password,
            fullname,
            role,
            description,
            phone,
        };
        await pool.query("INSERT INTO users set ?", [newUser]);
        return res.status(200).json({
            status: 200,
            message: "New User created Successfully",
        });
    } catch (err) {
        return res.status(400).json({
            message: "Bad Request",
            status: 400,
        });
    }
};
