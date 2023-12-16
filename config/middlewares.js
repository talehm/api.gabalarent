module.exports = [
  'strapi::errors',
  'strapi::security',
{
    name: 'strapi::cors',
	config: {
		enabled: true,
		headers: '*',
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	}
	},
	'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
