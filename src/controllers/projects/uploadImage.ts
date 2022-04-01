import { Request, Response } from "express";

export const UploadImageController = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 1,
    message: "Image Upload successfully",
    url: "https://google.com",
  });
};
