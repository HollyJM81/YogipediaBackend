const fs = require('fs');
const { Client } = require('pg');

// Read the JSON file
const rawData = fs.readFileSync('./data/poses.json');
const posesData = JSON.parse(rawData);

// Database connection configuration
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'yoga_app_dev',
  password: 'password',
  port: 5432, // Change to your PostgreSQL port
};

// Create a PostgreSQL client
const client = new Client(dbConfig);

async function populateDatabase() {
  try {
    // Connect to the database
    await client.connect();

    // Define the INSERT query with placeholders for all columns
    const insertQuery = `
      INSERT INTO Favourites (
        id, english_name, sanskrit_name_adapted, sanskrit_name, 
        translation_name, pose_description, pose_benefits, 
        url_svg, url_png, url_svg_alt, pose, category
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `;

    // Iterate over the JSON data and insert records
    const insertPromises = [];
    posesData.forEach((pose) => {
      const values = [
        pose.id,
        pose.english_name,
        pose.sanskrit_name_adapted,
        pose.sanskrit_name,
        pose.translation_name,
        pose.pose_description,
        pose.pose_benefits,
        pose.url_svg,
        pose.url_png,
        pose.url_svg_alt,
        pose.pose,
        pose.category,
      ];
      insertPromises.push(client.query(insertQuery, values));
    });

    await Promise.all(insertPromises);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the function to start populating the database
populateDatabase();
