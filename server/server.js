const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/bad', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Express App v.1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send({
    users: [
      {
        name: 'Andrew',
        age: 25,
      },
      {
        name: 'Natalia',
        age: 35
      }
    ]
  })
})

app.listen('3000');

module.exports.app = app;