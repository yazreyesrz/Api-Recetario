const { body, validationResult } = require("express-validator");

const validarRegistro = [
  body("nombre").notEmpty().withMessage("El nombre es requerido"),
  body("email").isEmail().withMessage("El email no es válido"),
  body("contraseña")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

const validarLogin = [
  body("email").isEmail().withMessage("El email no es válido"),
  body("contraseña").notEmpty().withMessage("La contraseña es requerida"),
];

const validarReceta = [
  body("titulo").notEmpty().withMessage("El título es requerido"),
  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes son requeridos"),
  body("pasos").notEmpty().withMessage("Los pasos son requeridos"),
  body("categoria").notEmpty().withMessage("La categoría es requerida"),
];

const manejarErroresValidacion = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }
  next();
};

module.exports = {
  validarRegistro,
  validarLogin,
  validarReceta,
  manejarErroresValidacion,
};
