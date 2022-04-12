import { Request, Response } from "express";
import pool from "../../database";

export const CreateProject = async (req: Request, res: Response) => {
  try {
    const { description, name, stack, user_id, github, website } = req.body;

    const string = JSON.stringify(
      stack.map((item: any) => {
        return item.label;
      })
    );
    const newProject = {
      description,
      name,
      stacks: string,
      user_id,
      github,
      website,
    };
    const response = (await pool.query("INSERT INTO projects SET ?", [
      newProject,
    ])) as any;
    return res.status(200).json({
      message: "Project created successfully",
      project_id: response[0].insertId,
      status: 1,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Internal Error",
      status: 0,
    });
  }
};
