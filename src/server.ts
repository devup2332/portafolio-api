import express from "express";

const server = express();

server.listen(8000, () => {
    console.log("Serve on port 8000");
});

export default server;
