# server-deployment-practice

## [https://ibraheem-server-deploy-dev.herokuapp.com](dev branch Heroku deployment)

## [https://ibraheem-server-deploy-prod.herokuapp.com](main branch Heroku deployment)

### Useful Notes :

- `Jest` and `superTest` are crucial for testing all routes, start by requiring superTest :
  `const superTest = require('supertest');` then link superTest with your app :
  `const request = superTest(server.app);`

- Folders and file must have a certain placement ex : middlewares, handlers and **test**

- Each function must be in isolated file and we can export it directly using :
  `module.exports = (req, res, next) => { req.timestamp = new Date(); next(); };`

- When dealing with middlewares, make sure to use `next()` at the end of the function **must be a parameter too**

- starting function and app must be exported from server file immedietly :
  `module.exports = { start: start, app: app, };`

- Handleing 500 error is a bit different :
  `module.exports = (error, req, res, next) => { res.status(500).json({ code: 500, route: req.path, message:`Internal server error ${error.message}`, }); };`
  And this is how we use it in server : `app.use(internalServerError);`
