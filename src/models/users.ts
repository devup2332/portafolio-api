import { Links } from "./links";

export interface User {
  id?: string;
  password: string;
  username: string;
  email?: string;
  phone: number | string;
  fullname: string;
  about_me: string;
  social_links?: Links;
  created_at?: Date;
  cv: string;
  role: "admin" | "user" | "superadmin";
}
