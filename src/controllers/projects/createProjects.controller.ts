import { Request, Response } from "express";

export const CreateProject = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Project created successfully",
        status: 200,
    });
};
