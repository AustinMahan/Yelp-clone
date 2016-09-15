(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurants = require('../routes/restaurants');
    const login = require('../routes/login');
    const signup = require('../routes/signup');
    const cookieSession = require('cookie-session');

    // *** register routes *** //
    app.use(cookieSession({
      name: 'session',
      keys: [process.env.SECRET_KEY1, process.env.SECRET_KEY2]
    }));

    app.use('/', routes);
    app.use('/restaurants', restaurants);
    app.use('/login', login);
    app.use('/signup', signup);

  };

})(module.exports);
