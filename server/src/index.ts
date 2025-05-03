import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import apartmentRoutes from "./routes/apartmentRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apartmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
