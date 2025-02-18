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

async function fetchMovies(query) {
    try {
        const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
        console.log("Request URL: ", url);  // Log the request URL
        const response = await fetch(url);
        const data = await response.json();  // Parse the response

        console.log("API Response:", data);  // Log the response data to check what you're receiving

        if (data.Response === "True") {
            renderMovies(data.Search);  // Render if data is valid
        } else {
            alert("No movies found.");
        }
    } catch (error) {
        console.error("Error fetching movies:", error);  // Log any errors
        alert("An error occurred while fetching movies.");
    }
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
