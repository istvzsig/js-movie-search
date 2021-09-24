import Element from './Element.js';

export default class MovieCard
{
    constructor(parent, title, description, releaseDate)
    {
        const t = this;
        if(!parent) return;
        t.card = new Element();
        t.card.className = 'movie_card';

        t.title = new Element('h2');
        t.title.className = `${t.card.className}__title`;
        t.description = new Element('p');
        t.description.className = `${t.card.className}__description`;
        t.releaseDate = new Element('p');
        t.releaseDate.className = `${t.card.className}__release_data`;

        t.title.innerText = title;
        t.description.innerText = description.substring(0,61) + '...';
        t.releaseDate.innerText = `Released: ${releaseDate.substring(0,10)}`;

        t.links = new Element();
        t.links.className = 'links_bar';
        t.imdbLink = new Element('a');
        t.wikiLink = new Image();
        t.imdbLink.style.backgroundImage = `url(./src/modules/img/imdb-icon.png)`;
        t.imdbLink.href = 'http://www.stevensegallery.com';
        t.imdbLink.target = `_blank`;
        // t.imdbLink.src = './src/modules/img/wiki-icon.jpg';

        t.links.append(...[t.imdbLink, ]);

        t.card.append(...[t.title, t.description, t.releaseDate, t.links]);

        if(parent)
        {
            if(parent.children.length > 0) {
                parent.firstChild.before(t.card);
                return;
            }
            parent.appendChild(t.card)
        }

        // t.cardHover();
    }

    loadImage(url, t=this)
    {
        const img = new Image();
        img.className = `${t.card.className}__poster`;
        img.addEventListener('load', function() {
            t.card.firstChild.before(img);
            console.log('loaded image');
        });

        img.src = url;
    }

    cardHover(t=this)
    {
        let popup = new Element();
        popup.className = 'card_hover_details'
        t.card.addEventListener("mouseover", e =>
        {
            
            const txt = t.card.children[1].innerText;
            popup.innerText = txt;
            t.card.before(popup);
            // console.log()
        });
        t.card.addEventListener("mouseleave", e =>
        {
            popup.remove();
        });
    }

}