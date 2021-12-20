import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const ValidateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1] as string;
        if (!token) throw new Error("Token is undefined");
        const decoded = jwt.decode(token);
        if (!decoded) throw new Error("Invalid Token");
        next();
    } catch (err: any) {
        console.log({ ...err });
        return res.status(401).json({
            mesage: err.message,
            status: 401,
        });
    }
};
