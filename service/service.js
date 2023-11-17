import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./db/dbConnect.js";

const app = express();
const port = process.env.port || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../../", "public");
app.use(express.static(publicDirectory));

const serviceHtpp = http.createServer(app);

serviceHtpp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const io = new Server(serviceHtpp);

export default io;
