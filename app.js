// Requiring / importing "dotenv" config to allow access to .env file
require('dotenv').config();

// Declare variable to use Express function
const Express = require('express');

// Declare other essential packages
const Cors = require('cors');
const port = 1928;

// Declare app variable to allow in creating other essential functions
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

/**
 * Enable CORS
 * Cross-Origin Resource Sharing (CORS) is
 * an HTTP-header based mechanism that allows a server
 * to indicate any origins (domain, scheme, or port)
 * other than its own from which a browser should permit loading resources.
 */
app.use(Cors({ origin: '*' }));

const fidyahCalculatorRoute = require('./modules/fidyahCalculator/routers.js');

app.use('/api/mna', fidyahCalculatorRoute);

// Declare a function to check API is online or offline
app.all('*', (_, res) => {
  return res.status(200).send({
    code: 200,
    statustext: 'OK',
    success: true,
    message:
      'Selamat datang di API Fidyah Calculator, sebuah proyek oleh Mohamad Nouval Abdel Alkaf'
  });
});

app.listen(port);
console.log('listening on port ' + port);
