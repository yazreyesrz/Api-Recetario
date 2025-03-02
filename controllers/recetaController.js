const RecetaService = require("../services/recetaService");

class RecetaController {
  static async crearReceta(req, res) {
    try {
      const { usuario_id, titulo, ingredientes, pasos, imagen_url, categoria } =
        req.body;
      const recetaId = await RecetaService.crearReceta(
        usuario_id,
        titulo,
        ingredientes,
        pasos,
        imagen_url,
        categoria
      );
      res.status(201).json({ mensaje: "Receta creada", recetaId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async obtenerRecetas(req, res) {
    try {
      const { categoria } = req.params;
      const recetas = await RecetaService.obtenerRecetasPorCategoria(categoria);
      res.json(recetas);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = RecetaController;
