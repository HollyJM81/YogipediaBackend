const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('create favourite pose', () => {
  describe('/favourites', () => {
    describe('POST', () => {
      it('creates a new favourite pose in the database', async () => {
        const { status, body } = (await request(app).post('/favourites')).setEncoding({
          pose: 'Example Pose',
          category: 'Backbend',
        });

        expect(status).to.equal(201);
        expect(body.pose).to.equal('Example Pose');
        expect(body.category).to.equal('Backbend');

        const {
          rows: [favourites],
        } = await db.query(`SELECT * FROM Favourites WHERE id = ${body.id}`);
        expect(pose).to.equal('Example Pose');
        expect(category).to.equal('Backbend');
      });
    });
  });
});
