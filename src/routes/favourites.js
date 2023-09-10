const express = require('express');
const { createFavourite } = require('../controllers/favourites');

const router = express.Router();

router.post('/', createFavourite);

module.exports = { router };
