const express = require("express");
const connectDB = require("./config/db");
const corsMiddleware = require("./config/cors");
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Call the connectDB function to establish the connection
connectDB();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
const clientRoutes = require("./routes/clientRoutes");

const freelancerRoutes = require("./routes/freelancerRoutes");

app.use("/api/client", clientRoutes);
app.use("/api/freelancer", freelancerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
