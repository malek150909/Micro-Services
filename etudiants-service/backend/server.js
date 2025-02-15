const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8082;

app.use(cors());
app.use(express.json());

const etudiants = [
  { id: 21, nom: "Chabri", prenom: "Abdelmalek", email: "malekchabri@gmail.com" },
  { id: 22, nom: "Sayadi", prenom: "Chaima", email: "sayadichaima@example.com" },
  { id: 23, nom: "merakchi", prenom: "rahma", email: "merakchirahma@example.com" },
  { id: 24, nom: "boumahra", prenom: "nada", email: "boumahranada@example.com" }
];


app.get('/etudiants', (req, res) => {
  res.json(etudiants);
});

app.listen(PORT, () => {
  console.log(`Service Étudiants en écoute sur http://localhost:${PORT}`);
});
