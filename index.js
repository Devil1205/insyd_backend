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

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use(cors());
app.use(express.json());

// Swagger documentation route
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss:
      ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
    customCssUrl: CSS_URL,
  })
);

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
