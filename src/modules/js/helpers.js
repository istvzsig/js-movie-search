import Element from './Element.js';


export function clickEvent(element, event, callback) {
    element.addEventListener(event, callback);
}

function searchMovieQuery(keyword) {
    return `
        query SearchMovies {
            searchMovies(query: "${keyword}") {
                id
                name
                overview
                releaseDate
                poster {
                  large
                }
            }
        }`
}

export async function getMovieData(sandboxURL, keyword, data=null) {
    data =
        await fetch(sandboxURL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: searchMovieQuery(keyword)
            })
        });

      return await data.json()
}


export function setRootDivBackground(element, imgUrl) {
    if(!(element && imgUrl)) return; // guardian
    // console.log({ element, imgUrl })
    element.style.backgroundImage =
        `url(${imgUrl})`

}