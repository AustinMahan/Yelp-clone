(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurants = require('../routes/restaurants');
    const login = require('../routes/login');
    const signup = require('../routes/signup');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/restaurants', restaurants)
    app.use('/login', login)
    app.use('/signup', signup)

  };

})(module.exports);
