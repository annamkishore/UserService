const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

describe('UserService: Backend App unittest', () => {
  chai.use(chaiHttp);
  const expect = chai.expect;
  const agent = chai.request.agent(app).keepOpen();

  before((done) => setTimeout(() => done(), 5000));
  after(done => {
    done();
    process.exit(0);
    // agent.close(); // not closing somehow
  });

  describe('Registration & Login', () => {
    it('should register the given user', (done) => {
      let user = {
        "username": "kishoreannam",
        "firstname": "kishore",
        "lastname": "annam",
        "email": "kishore@gmail.com",
        "password": "hello123",
      };

      agent
        .post('/user/register')
        .set('Content-Type', 'application/json')
        .send(user)
        .end((req, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should login with the given user', (done) => {
      agent
        .post('/user/login')
        .set('Content-Type', 'application/json')
        .send({username: 'kishoreannam', password: 'hello123'})
        .end((req, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
