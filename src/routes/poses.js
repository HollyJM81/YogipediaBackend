const express = require('express');
const {
  readPoses,
  posesByCategory,
  posesByDifficulty,
} = require('../controllers/poses');

const posesRouter = express.Router();

posesRouter.get('/', readPoses);
posesRouter.get('/category/:category', posesByCategory);
posesRouter.get('/level/:difficultyLevel', posesByDifficulty);

module.exports = { posesRouter };
