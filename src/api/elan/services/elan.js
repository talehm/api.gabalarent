'use strict';

/**
 * elan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elan.elan', {
	calculateTotalRooms: async (data) => {
		if (data && data.rooms) {
			return data.rooms.length;
		}
		return 0; // Default value if rooms is not present
	},
});
