const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('create favourite pose', () => {
  describe('/favourites', () => {
    describe('POST', () => {
      it('creates a new favourite pose in the favourites table', async () => {
        const requestBody = {
          pose_id: '1',
          pose_name: 'Boat',
          sanskrit_name: 'Navasana',
          pose_description: 'Description',
          url_png: 'a url',
          category: 'Core',
          level: 'Intermediate',
        };

        const response = await request(app)
          .post('/favourites')
          .send(requestBody);

        expect(response.status).to.equal(201);
        expect(response.body.pose_id).to.equal('1');
        expect(response.body.pose_name).to.equal('Boat');
        expect(response.body.sanskrit_name).to.equal('Navasana');
        expect(response.body.pose_description).to.equal('Description');
        expect(response.body.url_png).to.equal('a url');
        expect(response.body.category).to.equal('Core');
        expect(response.body.level).to.equal('Intermediate');
      });
    });
  });
});
