const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env.test file
dotenv.config({ path: './.env.test' });

// Debugging: Print out the constructed TEST_DATABASE_URL
const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;
console.log('Connection String:', TEST_DATABASE_URL);

// Create a PostgreSQL connection pool
const pool = new Pool({ connectionString: TEST_DATABASE_URL });

// List of tables to truncate (delete all data from)
const tablesToTruncate = ['userfavourites', 'users', 'poses'];

async function truncateTestDatabase() {
  const client = await pool.connect();

  try {
    for (const table of tablesToTruncate) {
      // Truncate the table to remove all data
      await client.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
    }
  } finally {
    client.release();
  }
}

truncateTestDatabase()
  .then(() => {
    console.log('Test database truncated successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error truncating test database:', error);
    process.exit(1);
  });
