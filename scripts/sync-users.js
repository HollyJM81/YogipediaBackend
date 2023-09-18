const { Client } = require('pg');
const admin = require('../firebase');

// Database connection configuration
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'yoga_app_dev',
  password: 'password',
  port: 5432,
};

const client = new Client(dbConfig);

async function syncUsersToDatabase() {
  try {
    // Connect to the PostgreSQL database
    await client.connect();

    // Fetch user data from Firebase
    const users = await admin.auth().listUsers();

    // Insert users into the Users table if they don't already exist
    const insertQuery = `
      INSERT INTO Users (firebase_uid, display_name, email)
      VALUES ($1, $2, $3)
      ON CONFLICT (firebase_uid)
      DO NOTHING
    `;

    const insertPromises = users.users.map(async (user) => {
      const values = [user.uid, user.displayName || null, user.email];
      await client.query(insertQuery, values);
    });

    await Promise.all(insertPromises);

    console.log('User synchronization completed successfully.');
  } catch (error) {
    console.error('Error synchronizing users:', error);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the function to start user synchronization
syncUsersToDatabase();
