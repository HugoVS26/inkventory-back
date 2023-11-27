import morgan from "morgan";
import express from "express";
import cors from "cors";
import { app } from "./app.js";
import { corsOptions } from "./utils/cors.js";
import { generalError } from "./middlewares/errors/errorsMiddleware.js";

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());

app.use(generalError);
