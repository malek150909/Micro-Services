import { useState } from 'react';

function Login() {
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matricule, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Connexion réussie !');
      } else {
        setMessage(data.message || 'Erreur lors de la connexion.');
      }
    } catch (error) {
      setMessage('Erreur du serveur. Veuillez réessayer plus tard.',error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-6">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="matricule" className="block font-medium mb-1">
              Matricule
            </label>
            <input
              type="text"
              id="matricule"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
