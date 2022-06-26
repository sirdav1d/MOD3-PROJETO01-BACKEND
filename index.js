const express = require('express');
const cors = require('cors');
const route = require('./src/routes/character.route');

const port = 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use('/RickandMorty', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
