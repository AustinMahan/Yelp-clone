(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurants = require('../routes/restaurants');
    const login = require('../routes/login');
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
        knex('users').where('id', req.session.user.id).then((data) => {
          if (data.length > 0) {
            req.renderObj.user = data[0];
          }else {
            req.renderObj.user = undefined;
          }
        });
        next();
      } else {
        next()
      }
    });

    app.use('/', routes);
    app.use('/restaurants', restaurants);
    app.use('/login', login);
    app.use('/signup', signup);

  };

})(module.exports);
