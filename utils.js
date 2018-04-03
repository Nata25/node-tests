module.exports = {
  add: (a, b) => {
    return a + b;
  },
  square: (a) => {
    return a * a;
  },
  setName: (user, fullName) => {
    const names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  },
  asyncAdd: (a, b, callback) => {
    setTimeout(() => {
      callback(a + b);
    }, 1000);
  },
  asyncSquare: (a, callback) => {
    setTimeout(() => {
      callback(a * a);
    }, 1000);
  }




}