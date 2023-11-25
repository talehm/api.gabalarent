'use strict';

/**
 * elan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elan.elan');
