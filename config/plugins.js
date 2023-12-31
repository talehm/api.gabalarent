module.exports = ({ env }) => ({
	// ... other configurations

	// Add the jwtSecret configuration
	'users-permissions': {
			jwtSecret: env('JWT_SECRET', 'your-secret-key-here'),
	},
	'admin': {
		settings: {
		  // Hide the 'metaInfo' field in the 'elan' collection type
		  collections: {
			'elanlar': {
			  metadatas: {
				'metaInfo': {
				  mainField: true,
				  readViews: ['ListView', 'JsonField', 'TitleField', 'DefaultField'],
				  editViews: ['InputField', 'JsonField', 'AdvancedSettingsView', 'MediaLib', 'TitleField'],
				  isDisplayed: false,
				},
			  },
			},
		  },
		},
	  },
});
