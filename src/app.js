// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const routes = require("./routes");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/emirates", routes);

// module.exports = app;



const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder as static so frontend can access images
const uploadsPath = path.join(__dirname, "..", "uploads");
app.use("/uploads", express.static(uploadsPath));

// Routes
const emiratesRoutes = require("./routes");
app.use("/api/emirates", emiratesRoutes);

module.exports = app;
