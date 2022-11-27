/*
  Webflix is a streaming platform for popular movies. 
  I want to create a program that automatically adds movies to
  my watchlist so I don't have to. I ONLY watch action and 
  animation movies, so I want all the action and animation movies 
  added to my watchlist, whether they're available yet or not.

  A movie has three properties: title, availble (yes or no), and genre.

  Once my watchlist is created I want to see my movies that are 
  availbe to watch.

  ex. 
  >> Title: "The Land Before Time" -- Genre: animation
  >> Title: "Black Hawk Down" -- Genre: action

  * Define a function whose responsibility is to add a movie to my watchlist. 
  * Define a function to display a watchlist movie
  

  ************************************
  ADVANCED STRETCH GOALS
  ************************************
  2. What if a movie has 2+ gneres?
  4. What if the string values for the genres is stored in its
      own array?
*/

const movies = [
  {
    title: "K.G.F",
    available: true,
    genre: "Action",
  },
  {
    title: "Prometheus",
    available: false,
    genre: ["Sci-Fi","Action"]
  },
  {
    title: "Fantastic Planet",
    available: true,
    genre: "Animation",
  },
  {
    title: "Notebook",
    available: true,
    genre: "Sucks",
  },
  {
    title: "Avatar2",
    available: false,
    genre: ["Action","Animation"]
  },
];

const watchlist = [];
const filterMovies = (movieArr) => {
  for (let movie of movieArr) {
    if (movie.genre.includes("Action") || movie.genre.includes("Animation")) {
        watchlist.push(movie)
    }
  }
};

// console.log(filterMovies(movies));
filterMovies(movies)
console.log(watchlist)

const movieStringer = (listsArr) => {
    for (const movie of watchlist) {
        console.log(`Title: ${movie.title} -- Genre: ${movie.genre}`)
    }
}

const newList = filterMovies()

movieStringer(watchlist)

/* 
    Define your functions here
*/

/* 
    Write your logic for identifying which movies should be added to the watchlist
*/

/* 
    Write your logic for if a movie should be displayed here
*/
