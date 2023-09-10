const db = require('../db/index');

const createFavourite = async (req, res) => {
  const { pose, category } = req.body;

  try {
    const { rows: [favourite] } = await db.query(`INSERT INTO Favourites (pose, category) VALUES ($1, $2) RETURNING *`, [pose, category]);
    res.status(201).json(favourite);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createFavourite };
