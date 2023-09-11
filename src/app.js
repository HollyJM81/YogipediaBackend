const express = require('express');
const { router } = require('./routes/favourites');
const { apiRouter } = require('./routes/fetchPosesData');

const app = express();

app.use(express.json());

app.use('/favourites', router);

// route for getting data from API
app.use('/fetch-and-insert-poses', apiRouter);

module.exports = app;
