const healthCheck = require('../controller/health-check');
const contactController = require('../controller/contact');
const userController = require('../controller/user');

module.exports = (app) => {
   app.route('/')
      .get(healthCheck)

   app.route('/contact')
      .get(contactController.getContact)
      .post(contactController.postContact)

   app.route('/user')
      .get(userController.getUser)
      .post(userController.postUser)
}
