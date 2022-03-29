import express from "express";
import morgan from "morgan";
import ApiRouter from "./routes/api.routes";
import cors from "cors";
import helmet from "helmet";
import { environments } from "./environments";
import passport from "passport";
import jwtStrategy from "./middlewares/validateToken.middleware";
import path from "path";

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.static(path.join(__dirname, "images")));
server.use(express.urlencoded({ extended: true }));

passport.use("jwt", jwtStrategy);

server.use("/api", ApiRouter);

server.listen(environments.PORT, () => {
  console.log(`Serve on port ${environments.PORT}`);
});

export default server;
