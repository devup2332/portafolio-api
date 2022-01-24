import { Request, Response } from "express";
import pool from "../../database";
import { hashPassword } from "../../lib/hashPassword";
import { User } from "../../models/users";

const roles = ["user", "superadmin"];
export const CreaterUserController = async (req: Request, res: Response) => {
    try {
        const { username, password, email, fullname, role, about_me, phone } = req.body;
        if (!username || !password || !fullname || !role || !about_me || !phone || !email) {
            return res.status(400).json({
                message: "Please send complete data",
                status: 400,
            });
        }
        const user = (await pool.query("SELECT * FROM users WHERE username=?", [username])) as any;
        if (user[0][0]) {
            return res.status(200).json({
                status: 200,
                message: "Username already exist",
            });
        }
        const [rolUser] = roles.filter((rol) => {
            return rol === role;
        });
        if (!rolUser)
            return res.status(400).json({
                message: "Invalid Role",
                status: 400,
            });
        if (role === "superadmin") {
            const response = (await pool.query("SELECT * FROM users WHERE role='superadmin'")) as any;
            const superadmin = response[0][0] as User;
            if (superadmin)
                return res.status(200).json({
                    status: 200,
                    message: "There is a superadmin user already",
                });
            const hash = await hashPassword(password);
            const newUser: User = {
                username,
                password: hash,
                fullname,
                email,
                role,
                about_me,
                phone,
            };
            await pool.query("INSERT INTO users set ?", [newUser]);
            return res.status(200).json({
                status: 200,
                message: "New Superadmin created Successfully",
            });
        }
        const hash = await hashPassword(password);
        const new_user = {
            username,
            password: hash,
            fullname,
            email,
            role,
            about_me,
            phone,
        };
        await pool.query("INSERT INTO users set ?", [new_user]);
        return res.status(200).json({
            status: 200,
            message: "New User created Successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Server internal error",
            status: 500,
        });
    }
};
