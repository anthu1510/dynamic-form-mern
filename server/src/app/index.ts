import express from "express";
import { routes } from "../routes";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "5mb" }));

// adding routing
routes(app);

export default app;
