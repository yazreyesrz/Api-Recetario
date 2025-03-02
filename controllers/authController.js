const AuthService = require("../services/authService");

class AuthController {
  static async registrar(req, res) {
    try {
      const { nombre, email, contraseña } = req.body;
      const usuarioId = await AuthService.registrar(nombre, email, contraseña);
      res.status(201).json({ mensaje: "Usuario registrado", usuarioId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, contraseña } = req.body;
      const token = await AuthService.login(email, contraseña);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
