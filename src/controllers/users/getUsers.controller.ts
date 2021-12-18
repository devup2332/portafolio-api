import { Request, Response } from "express";
import pool from "../../database";

export const GetUsersController = async (req: Request, res: Response) => {
    const response = await pool.query("SELECT * FROM users");
    return res.status(200).json({
        message: "Users",
        users: response[0],
    });
};
