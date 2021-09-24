import App from './modules/js/App.js';

const ROOT = document.getElementById('__root__');

const APP = new App(ROOT);

const sandboxURL = 'https://tmdb.sandbox.zoosh.ie/dev/grphql';

APP.searchMovie(sandboxURL);
