const axios = require('axios');

async function fetchDataFromAPI() {
  const response = await axios.get('https://yoga-api-nzy4.onrender.com/v1/poses');
  return response.data; // Assuming the API response is an array of poses
}

module.exports = { fetchDataFromAPI };
