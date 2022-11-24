const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/pages.js');
const apiRoutes = require('./routes/api.js');

const uuid = require('uuid');
const fs = require('fs');

const PORT = 3001;
const app = express();

// Middleware para analizar los datos de JSON y de formularios codificados por url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use(pagesRoutes);
app.use(apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);