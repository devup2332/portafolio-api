import { Request, Response } from "express";
import pool from "../../database";
import { Project } from "../../lib/reducers/projects";

export const GetProjectsController = async (req: Request, res: Response) => {
  try {
    const { id: user_id } = req.user as any;
    const projects = await projectsUser(user_id);
    return res.status(200).json({
      status: 1,
      message: "Projects getten successfully",
      projects,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Server Internal Error",
    });
  }
};

export const projectsUser = async (id: string) => {
  const projects = (
    await pool.query("SELECT * FROM projects WHERE user_id=?", [id])
  )[0] as Project[];
  const queries: Promise<any>[] = [];
  projects.forEach((item) => {
    queries.push(
      pool.query("SELECT * FROM images WHERE project_id=?", [item.id])
    );
  });
  const imagesResponse = await Promise.all(queries);
  const resArray: Project[] = [];
  imagesResponse.forEach((images, ind) => {
    resArray.push(new Project(projects[ind], images[0]));
  });

  return resArray;
};
