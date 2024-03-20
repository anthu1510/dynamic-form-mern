import "dotenv/config";
import http from "http";
import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 8000;
const server = http.createServer(app);

mongoose.connect(String(process.env.MONGO_URL)).then(() => {
  server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
});
