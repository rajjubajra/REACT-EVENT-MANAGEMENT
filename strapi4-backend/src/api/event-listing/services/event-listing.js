'use strict';

/**
 * event-listing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-listing.event-listing');
