const express = require('express');
const { favouritesRouter } = require('./routes/favourites');
const { posesRouter } = require('./routes/poses');

const app = express();

app.use(express.json());

app.use('/favourites', favouritesRouter);

app.use('/poses', posesRouter);

module.exports = app;
