const fs = require('fs');
const { Client } = require('pg');

// Read the JSON file
const rawData = fs.readFileSync('./data/poses.json');
const posesData = JSON.parse(rawData);

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
// Database connection configuration (update these values as needed)
const dbConfig = {
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  defaultDatabase: PGDATABASE,
};

// Create a PostgreSQL client
const client = new Client(dbConfig);

async function populateDatabase() {
  try {
    // Connect to the database
    await client.connect();

    // Check if data already exists in the database
    const { rows: existingPoses } = await client.query(
      'SELECT pose_name FROM Poses'
    );
    const existingPoseNames = new Set(
      existingPoses.map((row) => row.pose_name)
    );

    // Define the INSERT query with placeholders for all columns
    const insertQuery = `
      INSERT INTO Poses (
        pose_name, sanskrit_name, pose_description, pose_benefits,
        url_png, category, level
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    // Iterate over the JSON data and insert records if they don't already exist
    const insertPromises = [];
    posesData.forEach((pose) => {
      if (!existingPoseNames.has(pose.pose_name)) {
        const values = [
          pose.pose_name,
          pose.sanskrit_name,
          pose.pose_description,
          pose.pose_benefits,
          pose.url_png,
          pose.category,
          pose.level,
        ];
        insertPromises.push(client.query(insertQuery, values));
      }
    });

    await Promise.all(insertPromises);
    console.log('Data insertion completed successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the function to start populating the database
populateDatabase();
