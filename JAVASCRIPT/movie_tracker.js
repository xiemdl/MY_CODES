
let name = prompt("Enter your name:");
console.log("Hello, " + name);  // Developer Console
alert("Welcome, " + name);      // Popup alert

class Movie{
    constructor (title, director, year, genre, watched){
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.watched = watched;
    }

    getDetails(){
        return `${this.title} directed by ${this.director}, released in ${this.year}. Genre: ${this.genre}. Watched: ${this.watched}`;
    }
}

class MovieLibrary{
    constructor(){
        this.Movie = [];
    }

    addMovie(Movie){
        this.Movie.push(Movie);
    }

    listMovies(){
        this.Movie.forEach(Movie =>{
            console.log(Movie.getDetails());
        }
    )};

    toggleWathed(title){
        const Movie = this.Movie.find(m => m.title === title);
        if (Movie) {
            Movie.isread = !Movie.isread;
            console.log(`Watching "${title}" is now ${Movie.watched}`);
        } else {
            console.log(`Movie titled "${title}" not found.`);
        }   
    }



    filterGenre(genre){
        const filterGenre = this.Movie.filter(m => m.genre === genre);
    }

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