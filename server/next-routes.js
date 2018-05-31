const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: ({lang = ''}) => {
      switch (lang){
        case 'es': return '/inicio/';
        case 'en': return '/home/';
        default: return '/';
      }
    },
    prettyUrlPatterns: [
      {pattern: ['/home/','/'], defaultParams: {lang: 'en'}},
      {pattern: '/inicio/', defaultParams: {lang: 'es'}}
    ]
  },  
  {
    page: 'about',
    prettyUrl: ({lang = ''}) => {
      switch (lang){
        case 'es': return '/sobre/';
        case 'en':
        default:  return '/about/';
      }
    },
    prettyUrlPatterns: [
      {pattern: '/about/', defaultParams: {lang: 'en'}},
      {pattern: '/sobre/', defaultParams: {lang: 'es'}}
    ]
  },  
  {
    page: 'contact',
    prettyUrl: ({lang = ''}) => {
      switch (lang){
        case 'es': return '/contacto/';
        case 'en':
        default: return '/contact/';
      }
    },
    prettyUrlPatterns: [
      {pattern: '/contact', defaultParams: {lang: 'en'}},
      {pattern: '/contacto', defaultParams: {lang: 'es'}}
    ]
  },
  {
    page: 'services',
    prettyUrl: ({lang = ''}) => {
      switch (lang){
        case 'es': return '/servicios/';
        case 'en': 
        default: return '/services/';
      }
    },
    prettyUrlPatterns: [
      {pattern: '/services', defaultParams: {lang: 'en'}},
      {pattern: '/servicios', defaultParams: {lang: 'es'}}
    ]
  },
  {
    page: 'portfolio',
    prettyUrl: ({lang = ''}) => {
      switch (lang){
        case 'es': return '/portafolio/';
        case 'en': 
        default: return '/portfolio/';
      }
    },
    prettyUrlPatterns: [
      {pattern: '/portfolio', defaultParams: {lang: 'en'}},
      {pattern: '/portafolio', defaultParams: {lang: 'es'}}
    ]
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;