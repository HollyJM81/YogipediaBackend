const db = require('../db/index');

// Add a favourite pose
const createFavourite = async (req, res) => {
  const { userId, poseId } = req.body;

  try {
    const { rows: [favorite] } = await db.query(
      'INSERT INTO UserFavourites (user_id, pose_id) VALUES ($1, $2) RETURNING *',
      [userId, poseId],
    );

    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// get all favourites

const getFavourites = async (req, res) => {
  try {
    const { rows: favourites } = await db.query('SELECT * FROM Poses');
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
    const { rowCount } = await db.query('DELETE FROM Poses WHERE id = $1 RETURNING *', [id]);

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
