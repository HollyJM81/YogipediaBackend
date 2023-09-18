const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env.test file
dotenv.config({ path: './.env.test' });

// Debugging: Print out the constructed TEST_DATABASE_URL
const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;
console.log('Connection String:', TEST_DATABASE_URL);

// Create a PostgreSQL connection pool
const pool = new Pool({ connectionString: TEST_DATABASE_URL });

// const pool = new Pool({
//   connectionString: process.env.TEST_DATABASE_URL,
// });

const poses = [
  {
    pose_name: 'Sample Pose 1',
    sanskrit_name: 'Sanskrit Name 1',
    pose_description: 'Description 1',
    pose_benefits: 'Benefits 1',
    url_png: 'url1.png',
    category: 'Category 1',
    level: 'Level 1',
  },
  {
    pose_name: 'Sample Pose 2',
    sanskrit_name: 'Sanskrit Name 2',
    pose_description: 'Description 2',
    pose_benefits: 'Benefits 2',
    url_png: 'url2.png',
    category: 'Category 2',
    level: 'Level 2',
  },
  {
    pose_name: 'Sample Pose 3',
    sanskrit_name: 'Sanskrit Name 3',
    pose_description: 'Description 3',
    pose_benefits: 'Benefits 3',
    url_png: 'url3.png',
    category: 'Category 3',
    level: 'Level 3',
  },
];

const users = [
  {
    firebase_uid: 'user1',
    display_name: 'user1',
    email: 'user1@example.com',
  },
  {
    firebase_uid: 'user2',
    display_name: 'user2',
    email: 'user2@example.com',
  },
  {
    firebase_uid: 'user3',
    display_name: 'user3',
    email: 'user3@example.com',
  },
];

async function populateTestDatabase() {
  const client = await pool.connect();

  try {
    // Insert poses
    await Promise.all(poses.map(async (pose) => {
      await client.query(
        'INSERT INTO Poses (pose_name, sanskrit_name, pose_description, pose_benefits, url_png, category, level) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [
          pose.pose_name,
          pose.sanskrit_name,
          pose.pose_description,
          pose.pose_benefits,
          pose.url_png,
          pose.category,
          pose.level,
        ],
      );
    }));

    // Insert users
    await Promise.all(users.map(async (user) => {
      await client.query(
        'INSERT INTO Users (firebase_uid, display_name, email) VALUES ($1, $2, $3)',
        [user.firebase_uid, user.display_name, user.email],
      );
    }));
  } finally {
    client.release();
  }
}

populateTestDatabase()
  .then(() => {
    console.log('Test database populated successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error populating test database:', error);
    process.exit(1);
  });
