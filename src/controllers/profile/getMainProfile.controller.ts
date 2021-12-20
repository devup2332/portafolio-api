import { Request, Response } from "express";

export const GetMainProfile = async (req: Request, res: Response) => {
    console.log(req.body);
    return res.status(200).json({
        message: "Main profile got successfully",
        profile: {},
    });
};
