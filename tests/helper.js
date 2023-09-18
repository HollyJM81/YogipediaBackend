const { afterEach } = require('mocha');
const db = require('../src/db');

afterEach(async () => {
  try {
    console.log('Truncating UserFavourites table...');
    await db.query('TRUNCATE UserFavourites CASCADE');
    console.log('UserFavourites table truncated successfully.');
  } catch (error) {
    console.error('Error truncating UserFavourites table:', error);
  }
});
