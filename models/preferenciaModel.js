const db = require("../config/db");

class Preferencia {
  static async crear(usuario_id, preferencia) {
    const [result] = await db.execute(
      "INSERT INTO preferencias (usuario_id, preferencia) VALUES (?, ?)",
      [usuario_id, preferencia]
    );
    return result.insertId;
  }

  static async obtenerPorUsuario(usuario_id) {
    const [rows] = await db.execute(
      "SELECT * FROM preferencias WHERE usuario_id = ?",
      [usuario_id]
    );
    return rows;
  }
}

module.exports = Preferencia;
