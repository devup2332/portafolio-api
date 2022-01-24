import { Response, Request } from "express";
import pool from "../../database";
import { hashPassword } from "../../lib/hashPassword";
import { User } from "../../models/users";

const roles = ["admin"];
export const CreateAdminController = async (req: Request, res: Response) => {
    try {
        const { role, username, email, password, fullname, about_me, phone } = req.body;
        if (!username || !password || !fullname || !role || !about_me || !phone || !email) {
            return res.status(400).json({
                message: "Please send complete data",
                status: 400,
            });
        }
        const response = (await pool.query("SELECT * FROM users WHERE username=?", [username])) as any;
        const user = response[0][0] as User;
        if (user) {
            return res.status(200).json({
                status: 200,
                message: "Username already exist",
            });
        }
        const [rol] = roles.filter((rol) => {
            return rol === role;
        });
        if (!rol) {
            return res.status(200).json({
                status: 200,
                message: "Invalid role",
            });
        }
        const hash = await hashPassword(password);
        const newUser: User = {
            username,
            password: hash,
            fullname,
            role,
            email,
            about_me,
            phone,
        };

        const response_2 = (await pool.query("INSERT INTO users set ?", [newUser])) as any;
        const user_created = response_2[0][0] as User;

        return res.status(200).json({
            status: 200,
            message: `New ${role} created successfully`,
            user: user_created,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Server internal error",
            status: 500,
        });
    }
};
