const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('app', () => {

  const agent = chai.request.agent(server);

  it('Login test', (done) => {
    agent
      .post('/user/login')
      .set('Content-Type', 'application/json')
      .send({username: 'kish1', password: 'kish2'})
      .end((req, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Registration test', () => {
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
});


