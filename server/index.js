import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

// connect DB
connectDb();

// start server (Render needs this)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
