const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b100135861111ccc00fb1cc54bf3add1&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b100135861111ccc00fb1cc54bf3add1&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

//get Initial Movies
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } 
        = movie 

        const movieEL = document.createElement
        ('div')
        movieEL.classList.add('movie')

        movieEL.innerHTML = `
        <div class="movie">
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span id="green">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Nostrum voluptas nisi repellendus corrupti 
        beatae quam quasi optio laboriosam illo accusantium.
        </div>
    </div>
        `
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value


    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})