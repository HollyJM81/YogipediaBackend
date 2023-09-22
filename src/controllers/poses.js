const db = require('../db/index');

const readPoses = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM poses');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'An error occured while reading poses' });
  }
};

const posesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log(category);
    const { rows } = await db.query('SELECT * FROM poses WHERE category=$1', [
      category,
    ]);
    console.log(rows);

    res.status(200).json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'An error occured while reading poses by categories' });
  }
};

const posesByDifficulty = async (req, res) => {
  try {
    const { difficultyLevel } = req.params;
    const { rows } = await db.query('SELECT * FROM poses WHERE level=$1', [
      difficultyLevel,
    ]);

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      error: 'An error occured while reading poses by difficulty level',
    });
  }
};

module.exports = {
  readPoses,
  posesByCategory,
  posesByDifficulty,
};
