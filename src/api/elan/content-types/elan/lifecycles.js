const { Login } = require("@mui/icons-material");

module.exports = {
	async beforeCreate(event) {
		await calculateTotalBeds(event);
		return Promise.resolve();

},

	async beforeUpdate(event) {
		console.log('Before update');
		await calculateTotalBeds(event);
		console.log('After update');
		return Promise.resolve();
},

//

	// Other lifecycle methods can go here as well...
};
async function hideTextareaField(event) {
	const { data } = event.params;
	// console.log(event.params);
	// Check if the request is coming from the admin panel
	  // Remove or nullify the entire textarea field

  }
async function calculateTotalBeds(event) {
	const { data } = event.params;
	console.log(event.context && event.context.request && event.context.request.admin);
	// if (event.context && event.context.request && event.context.request.admin) {

		// Log the entire data object to inspect its structure

		// Ensure metaInfo is initialized as an object
		if (!data.metaInfo) {
			// Create a new metaInfo component if it doesn't exist
			const createdMetaInfo = await strapi.query('meta-info.meta-info').create({
				data: { totalBeds: 0, } // Set default value or adjust as needed
			});
			console.log(createdMetaInfo.data,);
			console.log("DATA");
			// Assign the created metaInfo to the entry
			data.metaInfo =createdMetaInfo; // Only assign the id to avoid recursion
		}
		// Check if the 'rooms' property exists and is an array
		if (data.rooms && Array.isArray(data.rooms)) {
			try {
				// Use Promise.all to wait for all asynchronous operations
				const roomPromises = data.rooms.map(async (r) => {
					const room = await strapi.query('room.room').findOne({
						where: { id: r.id },
						populate: ['beds'],
					});
					return room;
				});

				const rooms = await Promise.all(roomPromises);

				let totalBeds = 0;

				// Iterate through the fetched rooms
				rooms.forEach((room) => {
					// Check if beds exist and are an array
					if (room.beds && Array.isArray(room.beds)) {
						// Calculate total bed count for the current room
						totalBeds += room.beds.reduce((total, bed) => total + bed.count, 0);
						console.log(`Total beds in ${room.type}: ${totalBeds}`);
					} else {
						console.log(`No beds found for ${room.type}`);
					}
				});

				// Set the totalBeds property in the metaInfo object
				await strapi.query('meta-info.meta-info').update({
 					where: { id: data.metaInfo.id },
					 data: { totalBeds: totalBeds }
				 });
				// console.log(metaInfo, "metaInfo");
				// metaInfo.totalBeds = totalBeds;

				console.log( totalBeds, "totalBeds");
			} catch (error) {
				console.error(error);
				// Set totalBeds to 0 in case of an error
				// data.metaInfo={ totalBeds: 0 };
			}
		} else {
			// If 'rooms' is not defined or not an array, set totalBeds to 0
			// data.metaInfo.totalBeds=0
		}
	// }
}
