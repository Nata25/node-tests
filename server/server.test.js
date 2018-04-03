const request = require('supertest');

const app = require('./server').app;

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
  .expect({
    error: 'Page not found'
  })
  .end(done);
})