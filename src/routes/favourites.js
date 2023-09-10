const express = require('express');
const { createFavourite } = require('../controllers/favourites');

const router = express.Router();

router.post('/', createFavourite);
//router.get('/', getFavourites);

module.exports = { router };
