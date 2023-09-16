const express = require('express');

const app = express();
const { router } = require('./src/routes/favourites');

app.use(express.json());

app.use('/favourites', router);

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
