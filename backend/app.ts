
import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter";


const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/auth", authRouter);

export default app;