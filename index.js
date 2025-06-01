require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./db");

const userRoutes = require("./routes/userRoutes");
const actionRoutes = require("./routes/actionRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const startQueueWorker = require("./queue");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
  startQueueWorker();
});
