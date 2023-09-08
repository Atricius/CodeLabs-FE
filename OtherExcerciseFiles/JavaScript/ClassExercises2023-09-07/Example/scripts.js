
const movies = [
     {
          name: "Indiana Jones",
          genre: "Action",
          releaseYear: 2023,
          rating: 7.5
     },
     {
          name: "Barbie",
          genre: "Comedy",
          releaseYear: 2023,
          rating: 7.5
     },
     {
          name: "Titanic",
          genre: "Romance",
          releaseYear: 1997,
          rating: 8
     }
]

const listMoviesElement = document.getElementById("list-movies");

// Inner scope/local scope
for(let i = 0; i <movies.length; i++){
     const movieItemElement = document.createElement("li");

     movieItemElement.innerText = `
          Name: ${movies[i].name}, 
          Genre: ${movies[i].genre},
          ReleaseYear: ${movies[i].releaseYear},
          Rating: ${movies[i].rating}
     `
     console.log(movies);
}

// console.log(i);