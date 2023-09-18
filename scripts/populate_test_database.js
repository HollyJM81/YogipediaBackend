const { Pool } = require('pg');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env.test') });

// Database connection configuration
const dbConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pool = new Pool(dbConfig);

(async () => {
  try {
    // Connect to the database
    const client = await pool.connect();

    // Check if sample poses and users exist before inserting
    const poseExists = await client.query('SELECT 1 FROM Poses LIMIT 1');
    const userExists = await client.query('SELECT 1 FROM Users LIMIT 1');

    if (!poseExists.rows.length) {
      // Insert sample poses
      await client.query(
        'INSERT INTO Poses (pose_name, sanskrit_name, pose_description, pose_benefits, url_png, category, level) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        ['Sample Pose 1', 'Sanskrit Name 1', 'Description 1', 'Benefits 1', 'url1.png', 'Category 1', 'Level 1'],
      );
    }

    if (!userExists.rows.length) {
      // Insert sample users
      await client.query(
        'INSERT INTO Users (firebase_uid, display_name, email) VALUES ($1, $2, $3)',
        ['sample-user-uid-1', 'User 1', 'user1@example.com'],
      );
    }

    // Release the client back to the pool
    client.release();

    console.log('Test database populated successfully.');
  } catch (error) {
    console.error('Error populating test database:', error);
  } finally {
    // Close the pool to end the script
    pool.end();
  }
})();
