const express = require('express');
const {
  createFavourite,
  getFavourites,
  removeFavourite,
} = require('../controllers/favourites');

const router = express.Router();

router.post('/', createFavourite);
router.get('/', getFavourites);
router.delete('/', removeFavourite);

module.exports = { router };
