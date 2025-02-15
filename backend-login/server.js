const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = 8083;


app.use(bodyParser.json());


mongoose.set('strictQuery', false);


const userSchema = new mongoose.Schema({
    matricule: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.get('/login', async(req,res) => {
    res.send('login backend');
})

app.post('/login', async (req, res) => {
    const { matricule, password } = req.body;

    try {
        
        const user = await User.findOne({ matricule, password });
        if (user) {
            res.status(200).json({ message: 'Utilisateur trouvé ! Connexion réussie.' });
        } else {
            res.status(401).json({ message: 'Matricule ou mot de passe incorrect.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
});


const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/nom_de_ta_base', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};


start();
