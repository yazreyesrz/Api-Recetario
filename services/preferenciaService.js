const Preferencia = require("../models/preferenciaModel");

class PreferenciaService {
  static async agregarPreferencia(usuario_id, preferencia) {
    const preferenciaId = await Preferencia.crear(usuario_id, preferencia);
    return preferenciaId;
  }

  static async obtenerPreferencias(usuario_id) {
    const preferencias = await Preferencia.obtenerPorUsuario(usuario_id);
    return preferencias;
  }
}

module.exports = PreferenciaService;
