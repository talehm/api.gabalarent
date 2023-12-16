module.exports = [
  'strapi::errors',
  'strapi::security',
{
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
					origin: ['http://127.0.0.1:1337', 'http://127.0.0.1:3000', 'http://127.0.0.1:9000', 'http://127.0.0.1:8081', 'https://www.gabalarent.az/', 'https://gabalarent.az/', 'https://api.gabalarent.az/'],
					methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
     credentials: true,

    }
  },  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
