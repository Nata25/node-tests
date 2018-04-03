const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/bad', (req, res) => {
  res.status(404).send({
    error: 'Page not found'
  });
});

app.listen('3000');

module.exports.app = app;