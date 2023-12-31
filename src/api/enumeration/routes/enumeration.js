module.exports = {
	routes: [
			{
			 method: 'GET',
			 path: '/enumeration/house',
			 handler: 'enumeration.houseEnums',
			 config: {
			   policies: [],
			   middlewares: [],
			 },
			},
	],
};