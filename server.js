import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import companyRoutes from "./routes/companyRoutes.js";
import insuranceRoutes from "./routes/insuranceRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import travelRoutes from "./routes/travelRoutes.js";
import quoteRequestRoutes from "./routes/quoteRequestRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import trackerRoutes from "./routes/trackerRoutes.js";
import healthtakafulRoutes from "./routes/healthtakafulRoute.js";
import firetakafulRoutes from "./routes/firetakafulRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect (important: only once)
await connectDB();

// routes
app.use("/company-logos", express.static("public/company-logos"));
app.use("/api/companies", companyRoutes);
app.use("/api/insurance", insuranceRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/travel", travelRoutes);
app.use("/api/quote-requests", quoteRequestRoutes);
app.use("/api", contactRoutes);
app.use("/api/healthtakaful", healthtakafulRoutes);
app.use("/api/firetakaful", firetakafulRoutes);
app.use("/api/tracker", trackerRoutes);

// health check
app.get("/", (req, res) => {
  res.send("SPS backend OK");
});

// ❌ NO app.listen() on Vercel
export default app;
