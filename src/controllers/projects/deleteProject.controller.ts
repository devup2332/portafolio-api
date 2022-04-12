import { Request, Response } from "express";
import pool from "../../database";

export const DeleteProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM images WHERE project_id=?", [id]);
    await pool.query("DELETE FROM projects WHERE id=?", [id]);

    return res.status(200).json({
      status: 1,
      message: "Project deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Server internal error",
    });
  }
};
