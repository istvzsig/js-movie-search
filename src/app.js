import App from './modules/js/App.js';

const ROOT = document.getElementById('__root__');

const APP = new App(ROOT);

const sandboxURL = false;

APP.searchMovie(sandboxURL);
