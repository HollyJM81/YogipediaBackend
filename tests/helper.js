const { afterEach } = require('mocha');
const db = require('../src/db');

afterEach(async () => {
  try {
    await db.query('TRUNCATE userfavourites CASCADE');
    await db.query('TRUNCATE users CASCADE');
    await db.query('TRUNCATE poses CASCADE');
  } catch (error) {
    console.error('Error truncating UserFavourites table:', error);
  }
});
