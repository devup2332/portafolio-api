import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { User } from "../../models/users";
import pool from "../../database";
import { environments } from "../../environments";

export const UploadCvController = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const user = req.user as User;
    if (!file)
      return res.status(200).json({
        status: 0,
        message: "Server Error",
      });
    const { secure_url, public_id } = await cloudinary.v2.uploader.upload(
      file.path,
      {
        type: "private",
        access_mode: "authenticated",
        folder: "portafolio/cv/",
      }
    );

    await pool.query("UPDATE users SET ? WHERE id=?", [
      { cv: secure_url },
      user.id,
    ]);
    return res.status(200).json({
      status: 1,
      message: "Pdf updated succesfully",
      url: secure_url,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Server is not responding",
    });
  }
};
