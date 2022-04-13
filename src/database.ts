import mysql from "mysql2";
import { environments } from "./environments";

const pool = mysql.createPool({
  host: environments.DB.DB_HOST,
  password: environments.DB.DB_PASSWORD,
  user: environments.DB.DB_USER,
  database: environments.DB.DB_DATABASE,
});
console.log(environments.DB);

const promisePool = pool.promise();

const connection = async () => {
  pool.getConnection((err) => {
    if (err) return console.log("Database fail", err);
    console.log("Database is ready");
  });
};

connection();

export default promisePool;
