const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// CORS middleware - allow all origins for development
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder as static so frontend can access images
const uploadsPath = path.join(__dirname, "..", "uploads");
app.use("/uploads", express.static(uploadsPath));

// Routes
const emiratesRoutes = require("./routes");
app.use("/api/emirates", emiratesRoutes);

// Health check endpoint for browser testing
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend server is running!",
    status: "OK",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
