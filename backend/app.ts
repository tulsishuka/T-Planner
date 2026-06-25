
import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter";
import documentRouter from "./routes/documentRouter";


const app = express();

app.use(express.json());

app.use(cors());
app.use(
  "/uploads",
  express.static("uploads")
);

app.use("/api/v1/auth", authRouter);
app.use(
  "/api/documents",
  documentRouter
);


export default app;