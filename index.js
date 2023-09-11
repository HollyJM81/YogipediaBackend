const express = require('express');

const app = express();
const { router } = require('./src/routes/favourites');
const { fetchDataFromAPI } = require('./api/api');

app.use(express.json());

app.use('/favourites', router);

// Define a route to fetch and insert data from the API
app.get('/fetch-and-insert-poses', async (req, res) => {
  try {
    // Call the API service function to fetch and insert data
    await fetchDataFromAPI();

    res.status(200).json({ message: 'Data fetched and inserted successfully.' });
  } catch (error) {
    console.error('Error fetching and inserting data:', error);
    res.status(500).json({ error: 'Failed to fetch and insert data.' });
  }
});

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
