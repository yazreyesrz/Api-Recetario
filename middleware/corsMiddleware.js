const cors = require("cors");

const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Permite solicitudes desde el frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
});

module.exports = corsMiddleware;
