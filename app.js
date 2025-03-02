const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const recetaRoutes = require("./routes/recetaRoutes");
const {
  manejarErroresValidacion,
} = require("./middleware/validationMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const corsMiddleware = require("./middleware/corsMiddleware");
require("dotenv").config();

const app = express();

// Middlewares globales
app.use(corsMiddleware);
app.use(bodyParser.json());

// Rutas
app.use("/api", authRoutes);
app.use("/api/recetas", recetaRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
