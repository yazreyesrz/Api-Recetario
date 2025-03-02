const express = require("express");
const PreferenciaController = require("../controllers/preferenciaController");

const router = express.Router();

router.post("/preferencias", PreferenciaController.agregarPreferencia);
router.get(
  "/preferencias/:usuario_id",
  PreferenciaController.obtenerPreferencias
);

module.exports = router;
