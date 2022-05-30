'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this route is working');
});

app.get('/data', (req, res) => {
  res.json({ id: 1, name: 'sameer', email: 'lmao@gmail.com' });
});
function start(port) {
  app.listen(port, () => {
    console.log(`I'm lestining to ${port}`);
  });
}
module.exports = {
  start: start,
  app: app,
};
