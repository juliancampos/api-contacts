const app = require('express')();
const routes = require('../routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

routes(app);

module.exports = app;
