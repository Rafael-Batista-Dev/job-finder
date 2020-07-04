const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O Express está rodenado na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Está Online");
});
