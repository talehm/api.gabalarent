module.exports = ({ env }) => ({
	// ... other configurations

	// Add the jwtSecret configuration
	'users-permissions': {
			jwtSecret: env('JWT_SECRET', 'your-secret-key-here'),
	},
});
