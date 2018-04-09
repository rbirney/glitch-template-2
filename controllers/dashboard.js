'use strict';

const logger = require('../utils/logger');
const accounts = require('./accounts.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: 'Template 2 Dashboard',
      user: loggedInUser,
    };
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
