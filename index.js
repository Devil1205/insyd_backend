require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();
require("./db");

const userRoutes = require("./routes/userRoutes");
const actionRoutes = require("./routes/actionRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const startQueueWorker = require("./queue");
import path from "path";
import { fileURLToPath } from "URL";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const __swaggerDistPath = path.join(
  __dirname,
  "node_modules",
  "swagger-ui-dist"
);

app.use(cors());
app.use(express.json());

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// test route to test deployment
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
  startQueueWorker();
});
