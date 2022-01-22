import { Response, Request } from "express";
import pool from "../../database";
import { hashPassword } from "../../lib/hashPassword";

const roles = ["admin"];
export const CreateAdminUsersController = async (req: Request, res: Response) => {
    try {
        const { role, username, password, fullname, description, phone } = req.body;
        if (!username || !password || !fullname || !role || !description || !phone) {
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
        const newUser = {
            username,
            password: hash,
            fullname,
            role,
            description,
            phone,
        };

        const created = (await pool.query("INSERT INTO users set ?", [newUser])) as any;

        return res.status(200).json({
            status: 200,
            message: `New ${role} created successfully`,
            user: created[0][0],
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server internal error",
            status: 500,
        });
    }
};
