const dotenv = require('dotenv');

try {
  dotenv.config({ path: './.env.test' });
} catch (err) {
  console.error('Error loading .env.test file:', err);
  process.exit(1); // Exit the test suite if environment variables cannot be loaded.
}
