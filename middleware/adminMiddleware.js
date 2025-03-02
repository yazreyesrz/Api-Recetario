const adminMiddleware = (req, res, next) => {
  if (!req.usuario || !req.usuario.es_admin) {
    return res
      .status(403)
      .json({
        error: "Acceso denegado. Se requieren permisos de administrador.",
      });
  }
  next();
};

module.exports = adminMiddleware;
