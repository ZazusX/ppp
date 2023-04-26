'use strict';

/**
 * root-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::root-page.root-page');
