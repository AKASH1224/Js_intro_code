const apiKey = "c949e165";
const movieList = document.querySelector("#movie-list");
const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById('movie-search');
const filterButtons = document.querySelectorAll('.filter-btn');

searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    console.log(query);  // Log the query to make sure it's passed correctly
    if (query) {
        fetchMovies(query);
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const genre = this.getAttribute('data-genre');
        fetchMoviesByGenre(genre);
    });
});

let currentPage = 1;
let totalResults = [];
const moviesPerPage = 6; // Show 6 movies per page

async function fetchMovies(query) {
    try {
        const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
       
        const response = await fetch(url);
        const data = await response.json();  // Parse the response

        console.log("API Response:", data);  // Log the response data to check what you're receiving

        if (data.Response === "True") {
            totalResults =data.Search;
            currentPage=1;
            renderMovies(getMoviesForPage(currentPage)); 
            updatePaginationButtons();

        } else {
            alert("No movies found.");
        }
    } catch (error) {
        console.error("Error fetching movies:", error);  // Log any errors
        alert("An error occurred while fetching movies.");
    }
}


function getMoviesForPage(page) {
    const start = (page - 1) * moviesPerPage;
    const end = start + moviesPerPage;
    return totalResults.slice(start, end);
}
    

function renderMovies(movies) {
    movieList.innerHTML = ''; // Clears previous movie list
    movies.forEach(movie => {
        const movieCard = document.createElement('div'); // Creates a div for each movie
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <span class="heart-icon" data-id="${movie.imdbID}">&#10084;</span>
        `;
        movieList.appendChild(movieCard);
    });
    
    document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', function() {
            toggleFavorite(this);
        });
    });
}

// Function to toggle favorite status of a movie
function toggleFavorite(heart) {
    const movieId = heart.getAttribute('data-id');  // Gets movie ID from heart icon
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Retrieves stored favorites

    if (favorites.includes(movieId)) {
        favorites = favorites.filter(id => id !== movieId); // Removes movie from favorites if already present
        heart.classList.remove('favorited'); // Removes visual indication of favorites
    } else {
        favorites.push(movieId);
        heart.classList.add('favorited');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites)); // Updates stored favorites in local storage
}

async function fetchMoviesByGenre(genre) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${genre}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === "True") {
            renderMovies(data.Search); // Calls function to display movies if found
        } else {
            alert("No movies found for this genre");
        }
    } catch (error) {
        console.log("Error Fetching movies by genre", error);
    }
}
// Pagination Button
const  prevButton =document.getElementById("prev")
const  NextButton =document.getElementById("next")

prevButton.addEventListener("click",function(){
    if(currentPage>1){
     currentPage --;
     renderMovies(getMoviesForPage(currentPage))
      updatePaginationButtons();    
    }
})

NextButton.addEventListener('click',function() {
    if (currentPage*moviesPerPage<totalResults.length) {
        currentPage ++;
        renderMovies(getMoviesForPage(currentPage))
        updatePaginationButtons();
        
    }
})

function updatePaginationButtons(){
    prevButton.disabled=currentPage === 1;
    NextButton.disabled= currentPage *moviesPerPage >= totalResults.length
}