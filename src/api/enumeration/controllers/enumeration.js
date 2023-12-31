module.exports = {
	houseEnums: async (ctx) => {
			// Your custom logic goes here
			try {
				// const contentTypeModel = strapi.db.getModel('api-elan-elan');
				const houseType = strapi.contentTypes ['api::elan.elan'].attributes.type.enum
				const houseLocation = strapi.contentTypes ['api::elan.elan'].attributes.location.enum
				const houseRoomType = strapi.components['room.room'].attributes.type.enum
				const houseRoomBedType = strapi.components['beds.beds'].attributes.type.enum

      // Fetch the content type settings
      // const contentTypeSettings = await contentTypeService.settings();
      // // Access the enumeration values from the content type settings
      // const enumValues = contentTypeSettings.attributes.type.enum;
				const result = {
					houseType,
					houseLocation,
					houseRoomType,
					houseRoomBedType
				}
      // Send the response
      ctx.send(result);
		} catch (error) {
				console.error(error);
				ctx.response.status = 500;
				ctx.send({ error: error });
		}
			// Send the response
	},
};