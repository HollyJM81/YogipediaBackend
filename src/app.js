const express = require('express');
const { router } = require('./routes/favourites');

const app = express();

app.use(express.json());

app.use('/favourites', router);

module.exports = app;
