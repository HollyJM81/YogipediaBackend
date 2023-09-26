const db = require('../db/index');

const createFavourite = async (req, res) => {
  const { userId, poseId } = req.body;

  try {
    const {
      rows: [favorite],
    } = await db.query(
      'INSERT INTO userfavourites (user_id, pose_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [userId, poseId]
    );

    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getFavourites = async (req, res) => {
  try {
    const { rows: favourites } = await db.query('SELECT * FROM userfavourites');
    res.status(200).json(favourites);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getUserFavourites = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows: favourites } = await db.query(
      'SELECT * FROM userfavourites WHERE user_id = $1',
      [id]
    );

    res.status(200).json(favourites);
  } catch (err) {
    res.status(500).json({
      error:
        'An error occured while retrieving favourite poses for specific user',
    });
  }
};

const removeFavourite = async (req, res) => {
  const { userId, poseId } = req.body;

  try {
    const { rowCount } = await db.query(
      'DELETE FROM userfavourites WHERE user_id = $1 AND pose_id = $2 RETURNING *',
      [userId, poseId]
    );
    console.log(rowCount);

    if (rowCount === 0) {
      res.status(404).json({ message: 'Favourite not found.' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createFavourite,
  getFavourites,
  getUserFavourites,
  removeFavourite,
};
