import { Request, Response } from "express";

export const CreateProject = (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.file);
  return res.status(200).json({
    message: "Project created successfully",
    status: 200,
  });
};
