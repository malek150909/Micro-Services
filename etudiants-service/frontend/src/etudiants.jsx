import { useState } from "react";

function Etudiants() {
  const [etudiants, setEtudiants] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction pour récupérer les étudiants
  const fetchEtudiants = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8082/etudiants");
      const data = await response.json();
      setEtudiants(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants :", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Liste des Étudiants</h1>
      <button
        onClick={fetchEtudiants}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Chargement..." : "Afficher les étudiants"}
      </button>

      <ul className="mt-4">
        {etudiants.map((etudiant) => (
          <li key={etudiant.id} className="border p-2 mt-2">
            {etudiant.nom} {etudiant.prenom} - {etudiant.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Etudiants;