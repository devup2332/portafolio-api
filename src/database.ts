import mysql from "mysql2";
import { environments } from "./environments";

const pool = mysql.createPool({
    host: environments.DB.DB_HOST,
    password: environments.DB.DB_PASSWORD,
    user: environments.DB.DB_USER,
    database: environments.DB.DB_DATABASE,
});

pool.getConnection((err) => {
    if (err) {
        throw new Error("Database connection failed");
    }

    console.log("Database is connected");
});

export default pool
