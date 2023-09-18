const db = require('../db/index');

const createFavourite = async (req, res) => {
  const { userId, poseId } = req.body;

  try {
    console.log('Received request to create favorite:', { userId, poseId }); // Added for debugging will remove later
    const { rows: [favorite] } = await db.query(
      'INSERT INTO userfavourites (user_id, pose_id) VALUES ($1, $2) RETURNING *',
      [userId, poseId],
    );

    console.log('Favorite created:', favorite); // Added for debugging will remove later
    res.status(201).json(favorite);
  } catch (err) {
    console.error('Error creating favorite:', err.message); // Added for debugging will remove later
    res.status(500).json(err.message);
  }
};

// get all favourites from the favourites table

const getFavourites = async (req, res) => {
  try {
    const { rows: favourites } = await db.query('SELECT * FROM userfavourites');
    res.status(200).json(favourites);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// get a specific user's favourites

const getSpecificUsersFavourites = async (req, res) => {};

// Remove a favorite pose from a user by userID
const removeFavourite = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the favorite item exists before deleting
    const { rowCount } = await db.query('DELETE FROM userfavourites WHERE pose_id = $1 RETURNING *', [id]);

    if (rowCount === 0) {
      res.status(404).json({ message: 'Favourite not found.' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createFavourite, getFavourites, getSpecificUsersFavourites, removeFavourite };
