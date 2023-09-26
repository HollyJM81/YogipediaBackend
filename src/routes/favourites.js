const express = require('express');
const {
  createFavourite,
  getFavourites,
  removeFavourite,
  getUserFavourites,
} = require('../controllers/favourites');

const favouritesRouter = express.Router();

favouritesRouter.post('/', createFavourite);
favouritesRouter.get('/', getFavourites);
favouritesRouter.get('/:id', getUserFavourites);
favouritesRouter.delete('/', removeFavourite);

module.exports = { favouritesRouter };
