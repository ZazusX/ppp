'use strict';

/**
 * root-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::root-page.root-page');
