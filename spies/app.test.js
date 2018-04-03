const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('Spies', () => {

  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Nata', 35);
    expect(spy).toHaveBeenCalledWith('Nata', 35);
  });

  it('should call saveUser  spy correctly', () => {
    const spy = expect.createSpy();
    const email ='Nata@gmail.com';
    const password = '111';
  
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });

});