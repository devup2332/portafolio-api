import { Request, Response } from "express";
import pool from "../../database";

export const GetMainProfile = async (req: Request, res: Response) => {
    
    try {
        const response = await pool.query("SELECT * FROM users WHERE role='admin'");
        return res.status(200).json({
            message: "Main profile got successfully",
            profile: response[0],
        });
    } catch (err) {
        return res.status(400).json({
            message: "Server is not responding",
            status: 400,
        });
    }
};
