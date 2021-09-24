import Element from './Element.js';
import SearchField from './SearchField.js';
import Loader from './Loader.js';
import AudioPlayer from './AudioPlayer.js';
import MovieCard from './MovieCard.js';
import * as Helper from './helpers.js';

export default class App
{
    constructor(root, name)
    {
        const t = this;
        t.name = name || 'App';
        t.app = new Element();
        t.header = new Element('header');
        t.header.id = 'search_bar';
        t.searchField = new SearchField(t.header, 'moooveee');
        t.app.id = t.name;
        t.cardContainer = new Element('div');
        t.cardContainer.id = 'cardContainer';
        this.loader = new Loader(null, 'preloader');
                
        t.app.append(...[t.header, t.cardContainer]);
        root.appendChild(t.app);
    }

    searchMovie(sandboxURL, keyword, t=this) { 
        const button = this.searchField.button;
        let entry = this.searchField.input;
        entry.placeholder = 'Search movies...'
        const preloader = this.loader;

        async function getEntryValue()
        {
            let len = entry.value.length;
            keyword = entry.value;
            // const clickSound = new AudioPlayer();
            if(keyword)
            {
                preloader.start(); // start preloader animation while fetch

                await Helper.getMovieData(sandboxURL, keyword)
                    .then(res => {
                        const resultOfMovies = res.data.searchMovies;
                        if(resultOfMovies === null) return;
                        let bestMatch = resultOfMovies[0];
                        // console.log(bestMatch)
                        // Helper.setRootDivBackground(
                        //         __root__ ?? document.body,
                        //         bestMatch.poster.large);
                    
                        try
                        {
                            let mc = new MovieCard(
                                t.cardContainer,
                                bestMatch.name,
                                bestMatch.overview,
                                bestMatch.releaseDate
                            );
                            mc.loadImage(bestMatch.poster.large);
                        }
                        catch(err) {console.log(err)};
                    });

                preloader.finish(); // if all set remove preloader
                
            }          
            
            else
            {
                t.header.classList.add('shake');

                setTimeout(function() {
                    t.header.removeAttribute('class');
                },1000)

                // console.log('No movie name to search');
            }

            entry.value = "" // reset input
        }

        Helper.clickEvent(button, 'click', getEntryValue);
    }
}