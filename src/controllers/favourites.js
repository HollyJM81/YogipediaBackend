const db = require('../db/index');

// const createFavourite = async (req, res) => {
//   const { pose, category } = req.body;

//   try {
//     const { rows: [favourite] } = await db.query
// ('INSERT INTO Favourites (pose, category) VALUES ($1, $2) RETURNING *', [pose, category]);
//     res.status(201).json(favourite);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// This is here to try and pinpoint an error and will be removed later

const createFavourite = async (req, res) => {
  const { pose, category } = req.body;

  try {
    console.log('Attempting to create a favorite pose...');
    const { rows: [favourite] } = await db.query('INSERT INTO Favourites (pose, category) VALUES ($1, $2) RETURNING *', [pose, category]);
    console.log('Favorite pose created successfully:', favourite);
    res.status(201).json(favourite);
  } catch (err) {
    console.error('Error creating favorite pose:', err);
    res.status(500).json(err.message);
  }
};

module.exports = { createFavourite };
