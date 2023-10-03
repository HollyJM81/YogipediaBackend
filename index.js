const express = require('express');

const app = express();
const cors = require('cors');
const { favouritesRouter } = require('./src/routes/favourites');
const { posesRouter } = require('./src/routes/poses');

app.use(express.json());
app.use(cors({ origin: ['https://yogipaedia.onrender.com'] }));

app.use('/favourites', favouritesRouter);
app.use('/poses', posesRouter);

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
