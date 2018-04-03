const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  it('should return \'hello world\'', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Hello, world!')
    .end(done);
  });
  
  it('should return error message', (done) => {
    request(app)
    .get('/bad')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
  });
  
  it('should find a user in users array', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body.users).toInclude(
        { name: 'Natalia', age: 35 }
      );
    })
    .end(done);
  });

});