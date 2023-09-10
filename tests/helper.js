const { afterEach } = require('mocha');
const db = require('../src/db');

afterEach(async () => {
  await db.query('TRUNCATE Favourites CASCADE');
});

// Will delete records in Favourites table after each test has run and close the database connection
