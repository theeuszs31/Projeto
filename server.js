const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8084;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/Projeto1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Projeto1.html'));
});

// Adicionando a rota /login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Validar email e senha (simulação, deve ser feito no servidor em um ambiente real)
  if (email === "email@teste.com" && password === "123456789") {
    // Retorna uma resposta JSON indicando sucesso
    res.json({ success: true });
  } else {
    // Retorna uma resposta JSON indicando falha
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});