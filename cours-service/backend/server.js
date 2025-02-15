const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

// Fake database (simulée en mémoire)
const cours = [
  { id: 21, nom: 'Reseau', Credit: 4, Coeff: 3 },
  { id: 22, nom: 'SE', Credit: 5, Coeff: 3 },
  { id: 23, nom: 'Compile', Credit: 5, Coeff: 3 }
];

// Endpoint GET /etudiants → Retourne la liste des étudiants
app.get('/cours', (req, res) => {
  res.json(cours);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Service Étudiants en écoute sur http://localhost:${PORT}`);
});
