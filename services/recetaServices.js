const Receta = require("../models/recetaModel");

class RecetaService {
  static async crearReceta(
    usuario_id,
    titulo,
    ingredientes,
    pasos,
    imagen_url,
    categoria
  ) {
    const recetaId = await Receta.crear(
      usuario_id,
      titulo,
      ingredientes,
      pasos,
      imagen_url,
      categoria
    );
    return recetaId;
  }

  static async obtenerRecetasPorCategoria(categoria) {
    const recetas = await Receta.obtenerPorCategoria(categoria);
    return recetas;
  }
}

module.exports = RecetaService;
