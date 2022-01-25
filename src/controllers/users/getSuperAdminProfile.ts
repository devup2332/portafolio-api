import { Request, Response } from "express";
import pool from "../../database";
import { SuperadminProfile } from "../../lib/reducers/SuperadminProfile";
import { User } from "../../models/users";

export const GetSuperadminController = async (req: Request, res: Response) => {
    try {
        const response = (await pool.query("SELECT * FROM users WHERE role='superadmin'")) as any;
        const superadmin = response[0][0] as User;

        if (!superadmin) {
            return res.status(200).json({
                message: "The superadmin profile has not been created yet",
                status: 200,
            });
        }
        const links = (await pool.query("SELECT * FROM social_links WHERE user_id=?", [superadmin.id])) as any;
        const user = new SuperadminProfile(superadmin, links[0][0]);

        return res.status(200).json({
            message: "Super Admin profile obtained successfully",
            profile: user,
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
