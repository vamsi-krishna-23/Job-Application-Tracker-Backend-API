import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import applicationRoutes from "./routes/application.routes.js";
import authRouter from "./routes/auth.routes.js"

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/auth", authRouter)
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Job Application Tracker API is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});