import mysql from "mysql2";
import { environments } from "./environments";

const connectionDb = () => {
    return mysql.createConnection({
        host: environments.DB.DB_HOST,
        password: environments.DB.DB_PASSWORD,
        user: environments.DB.DB_USER,
        database: environments.DB.DB_DATABASE,
    });
};

export const connectionDB = connectionDb();

console.log("Database is connected");
