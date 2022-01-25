import { Request, Response } from "express";
import pool from "../../database";
import { User } from "../../models/users";

export const UpdateUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.user as User;
        const { links, username, email, fullname, phone, about_me } = req.body;
        const new_profile = {
            username,
            email,
            fullname,
            phone,
            about_me,
        };
        const new_links = {
            github: links.github,
            linkedin: links.linkedin,
        };

        await pool.query("UPDATE users SET ? WHERE id=?", [new_profile, id]);
        await pool.query("UPDATE social_links SET ? WHERE user_id=?", [new_links, id]);
        return res.status(200).json({
            status: 200,
            message: "User updated successfully",
        });
    } catch (err) {}
};
