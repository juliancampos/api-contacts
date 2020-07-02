const app = require('./config/express.js');
const http = require('http')
require('dotenv').config();


http.createServer(app).listen(process.env.port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
