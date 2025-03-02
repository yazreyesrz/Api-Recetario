const PreferenciaService = require("../services/preferenciaService");

class PreferenciaController {
  static async agregarPreferencia(req, res) {
    try {
      const { usuario_id, preferencia } = req.body;
      const preferenciaId = await PreferenciaService.agregarPreferencia(
        usuario_id,
        preferencia
      );
      res.status(201).json({ mensaje: "Preferencia agregada", preferenciaId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async obtenerPreferencias(req, res) {
    try {
      const { usuario_id } = req.params;
      const preferencias = await PreferenciaService.obtenerPreferencias(
        usuario_id
      );
      res.json(preferencias);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PreferenciaController;
