const express = require('express');

const app = express();
const { router } = require('./src/routes/favourites');
const { posesRouter } = require('./src/routes/poses');

app.use(express.json());

app.use('/favourites', router);
app.use('/poses', posesRouter);

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
