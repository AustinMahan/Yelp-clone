(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurants = require('../routes/restaurants');
    const login = require('../routes/login');
    const logout = require('../routes/logout');
    const signup = require('../routes/signup');
    const cookieSession = require('cookie-session');
    const knex = require('../db/knex')

    // *** register routes *** //
    app.use(cookieSession({
      name: 'session',
      keys: [process.env.SECRET_KEY1, process.env.SECRET_KEY2]
    }));

    app.use(function(req, res, next) {
      req.renderObj = {};
      if (req.session.user) {
        req.renderObj.user = req.session.user;
        next();
      } else {
        next()
      }
    });

    app.use('/', routes);
    app.use('/restaurants', restaurants);
    app.use('/login', login);
    app.use('/logout', logout);
    app.use('/signup', signup);

  };

})(module.exports);
