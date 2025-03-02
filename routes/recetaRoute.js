const express = require("express");
const RecetaController = require("../controllers/recetaController");

const router = express.Router();

router.post("/recetas", RecetaController.crearReceta);
router.get("/recetas/:categoria", RecetaController.obtenerRecetas);

module.exports = router;
