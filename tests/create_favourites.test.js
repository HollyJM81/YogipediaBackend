const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../src/app');

describe('Create Favorites', () => {
  it('should create a favorite for a user', async () => {
    const userId = 1;
    const poseId = 7;

    const res = await chai
      .request(app)
      .post('/favourites')
      .send({ userId, poseId });

    expect(res).to.have.status(201);
    expect(res.body).to.have.property('user_id', userId);
    expect(res.body).to.have.property('pose_id', poseId);
  });
});
