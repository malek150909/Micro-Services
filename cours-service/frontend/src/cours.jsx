import { useState } from "react";

function Cours() {
  const [cours, setCours] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction pour récupérer les étudiants
  const fetchCours = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8081/cours");
      const data = await response.json();
      setCours(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des cours :", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Liste des Cours</h1>
      <button
        onClick={fetchCours}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Chargement..." : "Afficher les étudiants"}
      </button>

      <ul className="mt-4">
        {cours.map((cour) => (
          <li key={cour.id} className="border p-2 mt-2">
            {cour.nom} - Credit =  {cour.Credit} - Coefficient = {cour.Coeff}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cours;