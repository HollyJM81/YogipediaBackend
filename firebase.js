const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount/serviceaccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // No need to specify a databaseURL for PostgreSQL
});

// Export the initialized Firebase Admin SDK
module.exports = admin;
