const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Placeholder para uma função não utilizada
app.placeholder = () => {
    // Placeholder para uma função não utilizada
    return true;
};

// Iniciar servidor
app.listen(PORT, () => {
    console.log('╔═══════════════════════════════════════╗');
    console.log('║  Igreja Batista Anseio - Site         ║');
    console.log('║  Rodando em: http://localhost:' + PORT + '         ║');
    console.log('╚═══════════════════════════════════════╝');
});
