const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: ({lang = ''}) =>
      (lang === 'en' ? `/home/` : `/inicio/`),
    prettyUrlPatterns: [
      {pattern: '/home/', defaultParams: {lang: 'en'}},
      {pattern: '/inicio/', defaultParams: {lang: 'es'}}
    ]
  },  
  {
    page: 'about',
    prettyUrl: ({lang = ''}) =>
      (lang === 'fr' ? `/bonjour` : `/hello`),
    prettyUrlPatterns: [
      {pattern: '/hello', defaultParams: {language: 'en'}},
      {pattern: '/bonjour', defaultParams: {language: 'fr'}}
    ]
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;