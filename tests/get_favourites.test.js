const { describe, it, before, xit } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('get all favourite poses', () => {
  describe('/favourites', () => {
    describe('GET', () => {
      xit('returns a list of all favourite poses from the database', async () => {
        const response = await request(app)
          .get('/favourites');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.deep.include.members(addedFavourites);
      });
    });
  });
});
