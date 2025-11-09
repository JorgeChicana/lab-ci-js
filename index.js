const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Jorge Chicana, desde Render y GitHub Actions!');
});

module.exports = app; 

