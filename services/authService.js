const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuarioModel");
require("dotenv").config();

class AuthService {
  static async registrar(nombre, email, contraseña) {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const usuarioId = await Usuario.crear(nombre, email, hashedPassword);
    return usuarioId;
  }

  static async login(email, contraseña) {
    const usuario = await Usuario.encontrarPorEmail(email);
    if (!usuario) throw new Error("Usuario no encontrado");

    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );
    if (!contraseñaValida) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: usuario.id, es_admin: usuario.es_admin },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
  }
}

module.exports = AuthService;
