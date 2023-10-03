const chai = require('chai');

const chaiHttp = require('chai-http');
const { describe, it, xit } = require('mocha');
const app = require('../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Create Favorites', () => {
  it('should create a favorite for a user', async () => {
    const userId = 1;
    const poseId = 1;

    console.log('Sending request with data:', { userId, poseId }); // Add this line for debugging

    const res = await chai
      .request(app)
      .post('/favourites')
      .send({ userId, poseId });

    console.log('Received response:', res.body); // Add this line for debugging

    expect(res).to.have.status(201);
    expect(res.body).to.have.property('user_id', userId); // Use 'user_id' instead of 'userId'
    expect(res.body).to.have.property('pose_id', poseId); // Use 'pose_id' instead of 'poseId'
  });

  xit('should create a favorite for a second user', async () => {
    const userId = 2;
    const poseId = 1; // same pose_id used

    const res = await chai
      .request(app)
      .post('/favourites')
      .send({ userId, poseId });

    expect(res).to.have.status(201);
    expect(res.body).to.have.property('user_id', userId);
    expect(res.body).to.have.property('pose_id', poseId);
  });
});
