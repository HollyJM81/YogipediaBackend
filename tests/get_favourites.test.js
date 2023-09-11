const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('get all favourite poses', () => {
  let addedFavourites; // To store the added favourites

  before(async () => {
    // Add some favourite poses to the database before running the get all test
    const requestBody1 = {
      pose: 'Example Pose 1',
      category: 'Backbend',
    };

    const requestBody2 = {
      pose: 'Example Pose 2',
      category: 'Forward Bend',
    };

    const response1 = await request(app)
      .post('/favourites')
      .send(requestBody1);

    const response2 = await request(app)
      .post('/favourites')
      .send(requestBody2);

    addedFavourites = [
      response1.body, response2.body,
    ];
  });

  describe('/favourites', () => {
    describe('GET', () => {
      it('returns a list of all favourite poses from the database', async () => {
        const response = await request(app)
          .get('/favourites');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.deep.include.members(addedFavourites);
      });
    });
  });
});
