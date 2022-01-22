import { Request, Response } from "express";
import pool from "../../database";

export const GetSuperAdminProfile = async (req: Request, res: Response) => {
    try {
        const superadmin = (await pool.query("SELECT * FROM users WHERE role='superadmin'")) as any;

        if (!superadmin[0][0]) {
            return res.status(200).json({
                message: "The superadmin profile has not been created yet",
                status: 200,
            });
        }

        return res.status(200).json({
            message: "Super Admin profile obtained successfully",
            profile: superadmin[0][0],
            status: 200,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server internal error",
            status: 500,
        });
    }
};
