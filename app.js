class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title
        this.studio = studio
        this.rating = rating
    }

}
let getPG = (movies) => movies.filter(movie => movie.rating === 'PG').map((movie) => movie.title);

var movie = new Movie("Casino Royale", "Eon Productions", "PG13")
var movie1 = new Movie("Interstellar", "Syncopy", "PG")
var movie2 = new Movie("The Art of Racing in the Rain", "Fox Pictures", "PG")

console.log(getPG([movie, movie1, movie2]))