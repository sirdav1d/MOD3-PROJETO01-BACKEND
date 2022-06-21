const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const router = require('./src/routes/paletas.route');

app.use('/paletas', router);
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
