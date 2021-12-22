import { Request, Response } from "express";
import pool from "../../database";

export const CreateLinks = async (req: Request, res: Response) => {
    try {
        const { linkedin, github } = req.body;
        const user = (req.user as any);
        const newLink = {
            linkedin,
            github,
            user_id: user.id,
        };
        await pool.query("INSERT INTO links set ?", [newLink]);

        return res.status(200).json({
            message: "Link created successfully",
            status: 200,
        });
    } catch (err: any) {
        return res.status(500).json({
            mesage: err.message,
            status: 500,
        });
    }
};
