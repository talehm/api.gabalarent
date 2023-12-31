module.exports = ({ env }) => ({
	responses: {
			privateAttributes: ['_v', 'id', 'created_at'],
	},
	rest: {
			prefix: '/v1/api',
			defaultLimit: 12,
			maxLimit: 100,
			withCount: true,
	},
});
