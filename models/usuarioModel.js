const db = require("../config/db");

class Usuario {
  static async crear(nombre, email, contraseña, es_admin = false) {
    const [result] = await db.execute(
      "INSERT INTO usuarios (nombre, email, contraseña, es_admin) VALUES (?, ?, ?, ?)",
      [nombre, email, contraseña, es_admin]
    );
    return result.insertId;
  }

  static async encontrarPorEmail(email) {
    const [rows] = await db.execute("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  static async encontrarPorId(id) {
    const [rows] = await db.execute("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }
}

module.exports = Usuario;
