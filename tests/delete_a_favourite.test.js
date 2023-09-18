const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, beforeEach, xit } = require('mocha');

chai.use(chaiHttp);

const app = require('../src/app');
const db = require('../src/db/index');

const { expect } = chai; // Import 'expect' from chai

describe('Delete a Favorite Pose', () => {
  beforeEach(async () => {
    const userId = 1;
    const poseId = 7;
    const res = await chai
      .request(app)
      .post('/favourites')
      .send({ userId, poseId });
  });

  xit('deletes a favorite pose from the database', async () => {
    const poseIdToDelete = 7; // Replace '7' with the actual pose ID you want to delete
    const res = await chai
      .request(app)
      .delete(`/favourites/${poseIdToDelete}`);
    // Assert HTTP status code using 'expect'
    expect(res).to.have.status(204);

    // Verify that the favorite pose has been deleted by trying to fetch it
    const { rowCount } = await db.query('SELECT * FROM userfavourites WHERE pose_id = $1', [poseIdToDelete]);
    // Assert rowCount using 'expect'
    expect(rowCount).to.equal(0);
  });

  xit('returns a 404 status when trying to delete a non-existent favorite pose', async () => {
    const notAPoseId = 9999; // Replace with a non-existent pose ID

    // Sends a DELETE request to the API endpoint to delete a non-existent favorite pose
    const res = await chai
      .request(app)
      .delete(`/favourites/${notAPoseId}`); // Replace with your actual endpoint

    // Assert HTTP status code using 'expect'
    expect(res).to.have.status(404);
  });
});
