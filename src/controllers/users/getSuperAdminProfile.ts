import { Request, Response } from "express";
import pool from "../../database";

export const GetSuperadminController = async (req: Request, res: Response) => {
    try {
        const response = (await pool.query("SELECT * FROM users WHERE role='superadmin'")) as any;
        const superadmin = response[0][0];

        if (!superadmin) {
            return res.status(200).json({
                message: "The superadmin profile has not been created yet",
                status: 200,
            });
        }

        return res.status(200).json({
            message: "Super Admin profile obtained successfully",
            profile: superadmin,
            status: 200,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Server internal error",
            status: 500,
        });
    }
};
