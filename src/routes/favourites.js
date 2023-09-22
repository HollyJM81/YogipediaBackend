const express = require('express');
const {
  createFavourite,
  getFavourites,
  removeFavourite,
} = require('../controllers/favourites');

const favouritesRouter = express.Router();

favouritesRouter.post('/', createFavourite);
favouritesRouter.get('/', getFavourites);
favouritesRouter.delete('/', removeFavourite);

module.exports = { favouritesRouter };
