const express = require('express');
const { router } = require('./routes/favourites');
const { posesRouter } = require('./routes/poses');

const app = express();

app.use(express.json());

app.use('/favourites', router);

app.use('/poses', posesRouter);

module.exports = app;
