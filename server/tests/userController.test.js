const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const mocha = require('mocha');

describe('UserService Backend App unittest', () => {
  chai.use(chaiHttp);
  const expect = chai.expect;
  const agent = chai.request(server);

  before((done) => {
    setTimeout(() => done(), 5000);
  });

  it('Registration & Login test', (done) => {
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


