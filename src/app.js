const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes")

app.use(express.json());

// route
app.use("/api/v1", userRoutes);

module.exports = app;