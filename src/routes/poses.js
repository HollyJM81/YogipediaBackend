const express = require('express');
const { readPoses } = require('../controllers/poses');

const posesRouter = express.Router();

posesRouter.get('/', readPoses);

module.exports = { posesRouter };
