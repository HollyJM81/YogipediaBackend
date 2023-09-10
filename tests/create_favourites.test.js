const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('create favourite pose', () => {
  describe('/favourites', () => {
    describe('POST', () => {
      it('creates a new favourite pose in the database', async () => {
        const requestBody = {
          pose: 'Example Pose',
          category: 'Backbend',
        };

        const response = await request(app)
          .post('/favourites')
          .send(requestBody);

        expect(response.status).to.equal(201);
        expect(response.body.pose).to.equal('Example Pose');
        expect(response.body.category).to.equal('Backbend');
      });
    });
  });
});
