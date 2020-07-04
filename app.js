const express = require("express");
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O Express está rodenado na porta ${PORT}`);
});

//db Connection
db.authenticate()
  .then(() => {
    console.log("Conectado com o DB");
  })
  .catch((err) => {
    console.log("Erro na connection com o DB", err);
  });

//Routes
app.get("/", (req, res) => {
  res.send("Está Online");
});
