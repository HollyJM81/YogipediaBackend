const db = require('../db/index');

// Add a favourite pose
const createFavourite = async (req, res) => {
  const { pose, category } = req.body;

  try {
    const { rows: [favourite] } = await db.query('INSERT INTO Favourites (pose, category) VALUES ($1, $2) RETURNING *', [pose, category]);
    res.status(201).json(favourite);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// get all favourites

const getFavourites = async (req, res) => {
  try {
    const { rows: favourites } = await db.query('SELECT * FROM Favourites');
    res.status(200).json(favourites);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Remove a favorite pose by ID
const removeFavourite = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the favorite item exists before deleting
    const { rowCount } = await db.query('DELETE FROM Favourites WHERE id = $1 RETURNING *', [id]);

    if (rowCount === 0) {
      res.status(404).json({ message: 'Favourite not found.' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createFavourite, getFavourites, removeFavourite };
