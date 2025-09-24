// Movie Tracker Application

// Prompt user for their name and greet them
let name = prompt("Enter your name:");
console.log("Hello, " + name);  // Developer Console
alert("Welcome, " + name);      // Popup alert

// Movie class to represent each movie
class Movie{
    // Constructor to initialize movie properties
    constructor (title, director, year, genre, watched){
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.watched = watched;
    }
    // Method to get movie details
    getDetails(){
        return `${this.title} directed by ${this.director}, released in ${this.year}. Genre: ${this.genre}. Watched: ${this.watched}`;
    }
}

// MovieLibrary class to manage a collection of movies
class MovieLibrary{
    // Constructor to initialize the movie collection
    constructor(){
        this.Movie = [];
    }

    // Method to add a movie to the library
    addMovie(Movie){
        this.Movie.push(Movie);
    }
    
    // Method to list all movies in the library
    listMovies(){
        this.Movie.forEach(Movie =>{
            console.log(Movie.getDetails());
        });
    };

    // Method to toggle the watched status of a movie by title
    toggleWatched(title){
        const Movie = this.Movie.find(m => m.title === title);
        // If found, toggle its watched status
        if (Movie) {
            Movie.watched = !Movie.watched;
            console.log(`Watching "${title}" is now ${Movie.watched}`);
        // If not found, log a message
        } else {
            console.log(`Movie titled "${title}" not found.`);
        }   
    }



// Method to filter movies by genre
    filterGenre(genre){
        const filterGenre = this.Movie.filter(m => m.genre === genre);
    }

// Method to filter movies by year
    filterYear(year){
        const filterYear = this.Movie.filter(m => m.year === year);

    }
}


const myMovie = new MovieLibrary();
myMovie.addMovie(new Movie("Titanic", "James Cameron", 1997, "Romance", true));

myMovie.listMovies();
myMovie.toggleWathed();
myMovie.filterGenre();
myMovie.filterYear();