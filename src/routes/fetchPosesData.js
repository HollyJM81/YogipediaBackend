const axios = require('axios');
const db = require('../db');

async function insertPosesFromAPI() {
  try {
    // Fetch favourite poses data from the API
    const response = await axios.get('https://yoga-api-nzy4.onrender.com/v1/poses');

    if (response.status !== 200) {
      console.error('Failed to fetch poses from API');
      return;
    }

    const poses = response.data;

    // SQL query to insert a favourite pose
    const insertQuery = 'INSERT INTO Favourites (pose, category) VALUES ($1, $2)';

    // Use Promise.all to parallelize database inserts
    const insertPromises = poses.map(async (pose) => {
      const values = [pose.pose, pose.category];
      await db.query(insertQuery, values);
    });

    await Promise.all(insertPromises);
    console.log('All poses inserted successfully');
  } catch (error) {
    console.error('Error inserting poses:', error);
  }
}

// Call the function to start inserting poses
insertPosesFromAPI();
