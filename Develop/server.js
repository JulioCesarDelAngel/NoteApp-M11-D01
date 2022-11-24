const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/html.js');

const PORT = 3001;
const app = express();

app.use(express.static('public'))

app.use(pagesRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);