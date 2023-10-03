const express = require('express');

const app = express();
const cors = require('cors');
const { favouritesRouter } = require('./src/routes/favourites');
const { posesRouter } = require('./src/routes/poses');

app.use(express.json());
app.use(cors());

app.use('https://yogipaedia-bj0y.onrender.com/favourites', favouritesRouter);
app.use('https://yogipaedia-bj0y.onrender.com/poses', posesRouter);

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
