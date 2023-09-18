const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../src/app');

describe('Create Favorites', () => {
  it('should create a favorite for a user', async () => {
    // Define the user and pose IDs (replace with actual IDs)
    const userId = 'jFa1hc0OakTzj320W0KrfZbwMGQ2';
    const poseId = '2';

    // Sends a POST request to the API endpoint to create the favorite
    const res = await chai
      .request(app)
      .post('/favourites') // Replace with your actual endpoint
      .send({ userId, poseId });

    // Assert the response status code (200 OK if successful)
    expect(res).to.have.status(200);

    // Assert any other expectations based on your application logic
    // For example, you might check if the favorite was actually created in the database
    // You can make additional database queries to validate the results
  });
});
