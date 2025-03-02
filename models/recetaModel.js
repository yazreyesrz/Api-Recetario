const db = require("../config/db");

class Receta {
  static async crear(
    usuario_id,
    titulo,
    ingredientes,
    pasos,
    imagen_url,
    categoria
  ) {
    const [result] = await db.execute(
      "INSERT INTO recetas (usuario_id, titulo, ingredientes, pasos, imagen_url, categoria) VALUES (?, ?, ?, ?, ?, ?)",
      [usuario_id, titulo, ingredientes, pasos, imagen_url, categoria]
    );
    return result.insertId;
  }

  static async obtenerPorCategoria(categoria) {
    const [rows] = await db.execute(
      "SELECT * FROM recetas WHERE categoria = ?",
      [categoria]
    );
    return rows;
  }
}

module.exports = Receta;
