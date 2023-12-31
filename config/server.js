module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	app: {
			keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
	},
	webhooks: {
			populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
	settings: {
			// ... other settings
			session: {
					// ... other session configurations
					// Add the following line
					keys: env.array('SESSION_KEYS', ['myKeyA', 'myKeyB']),
			},
	},
});
