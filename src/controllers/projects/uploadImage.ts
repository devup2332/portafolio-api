import cloudinary from "cloudinary";
import { Request, Response } from "express";
import pool from "../../database";

export const UploadImageController = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const { project_id } = req.body;
    if (!file) {
      return res.status(200).json({
        status: 0,
        message: "Server Error",
      });
    }
    const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
      file.path,
      {
        folder: "portafolio/projects/",
      }
    );
    const newImage = {
      public_id,
      secure_url,
      type_image: req.body.type,
      project_id,
    };
    const re = await pool.query("INSERT INTO images SET ?", newImage);
    return res.status(200).json({
      status: 1,
      message: "Image Upload successfully",
      secure_url,
      re,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Internal Server Error",
    });
  }
};
