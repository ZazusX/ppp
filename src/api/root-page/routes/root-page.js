'use strict';

/**
 * root-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::root-page.root-page');
