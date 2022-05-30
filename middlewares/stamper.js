'use strict';
//Middleware def
module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
};
