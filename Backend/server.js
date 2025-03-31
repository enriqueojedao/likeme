import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // Middleware para parsear JSON.
app.use(cors());

app.use(postRoutes);

app.listen(PORT, () => console.log(`🔥 Server On http://localhost:${PORT}`));
