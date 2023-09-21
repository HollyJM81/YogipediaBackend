const db = require('../db/index');

const readPoses = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM poses');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'An error occured while reading poses' });
  }
};

module.exports = {
  readPoses,
};
