const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log del error para debugging
  res.status(500).json({ error: "Algo salió mal en el servidor." });
};

module.exports = errorMiddleware;
