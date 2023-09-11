const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('delete favorite pose', () => {
  let addedFavouriteId;

  before(async () => {
    const requestBody = {
      pose: 'Example Pose',
      category: 'Backbend',
    };

    const response = await request(app)
      .post('/favourites')
      .send(requestBody);

    addedFavouriteId = response.body.id;
  });

  describe('/favourites/:id', () => {
    describe('DELETE', () => {
      it('deletes a favourite pose from the database', async () => {
        const response = await request(app)
          .delete(`/favourites/${addedFavouriteId}`);

        expect(response.status).to.equal(204);
      });

      it('returns a 404 status when trying to delete a non-existent favourite', async () => {
        const nonExistentFavoriteId = 345;

        const response = await request(app)
          .delete(`/favourites/${nonExistentFavoriteId}`);

        expect(response.status).to.equal(404);
      });
    });
  });
});
