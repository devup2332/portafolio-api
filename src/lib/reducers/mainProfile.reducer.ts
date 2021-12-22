import { User } from "../../models/users";
import pool from "../../database";

export const mainProfileReducer = async (user: User) => {
    const response = (await pool.query("SELECT linkedin,github,created_at FROM links WHERE user_id=?", [
        user.id,
    ])) as any[];
    const newUser: User = {
        ...user,
        links: response[0][0],
    };

    return newUser;
};
