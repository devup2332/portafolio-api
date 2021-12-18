import express from "express";
import morgan from "morgan";
import ApiRouter from "./routes/api.routes";
import cors from "cors";
import helmet from "helmet";

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api", ApiRouter);

server.listen(8000, () => {
    console.log("Serve on port 8000");
});

export default server;
