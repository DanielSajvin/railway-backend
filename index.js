const express = require("express");
const app = express();
const connection = require("./db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      res.status(500).send("Error en el servidor");
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
