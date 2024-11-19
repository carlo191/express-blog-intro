const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "ciambellone",
    immagine: "publicciambellone.jpeg",
    tags: ["Ciambellone", "ciambella", "grande"],
  },
  {
    titolo: "Cracker Barbabietola",
    contenuto: "Cracker Barbabietola",
    immagine: "publiccracker_barbabietola.jpeg",
    tags: ["cracker", "barbabietola"],
  },
  {
    titolo: "Pane Fritto Dolce",
    contenuto: "Pane Fritto Dolce",
    immagine: "publicpane_fritto_dolce.jpeg",
    tags: ["pane", "fritto", "dolce"],
  },
  {
    titolo: "Pasta Barbabietola",
    contenuto: "Pasta Barbabietola",
    immagine: "publicpasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"],
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Torta Paesana",
    immagine: "public\torta_paesana.jpeg",
    tags: ["torta", "paesana"],
  },
];

console.log(posts);
