'use strict';
const express = require('express');
const app = express();
const stamper = require('../middlewares/stamper');
const notFoundError = require('../handlers/404');
const internalServerError = require('../handlers/500');
app.get('/', (req, res) => {
  res.send('this route is working');
});

app.get('/data', (req, res) => {
  res.json({ id: 1, name: 'sameer', email: 'lmao@gmail.com' });
});

//Middleware
app.get('/test', stamper, (req, res) => {
  res.json({
    id: 1,
    name: 'sameer',
    email: 'lmao@gmail.com',
    time: req.timestamp,
  });
});
app.get('/bad', (req, res) => {
  let num = 40;
  let result = num.forEach((element) => {
    console.log(element);
  });
  res.send(result);
});
app.use('*', notFoundError);
app.use(internalServerError);
function start(port) {
  app.listen(port, () => {
    console.log(`I'm lestining to ${port}`);
  });
}
module.exports = {
  start: start,
  app: app,
};
