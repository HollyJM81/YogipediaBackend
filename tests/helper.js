const { afterEach } = require('mocha');
const db = require('../src/db');

afterEach(async () => {
  try {
    await db.query('TRUNCATE UserFavourites CASCADE');
  } catch (error) {
    console.error('Error truncating UserFavourites table:', error);
  }
});
