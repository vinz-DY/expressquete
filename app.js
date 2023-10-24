const express = require("express");
const app = express();
const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
  {
    id: 4,
    title: "Alien",
    director: "Ridley Scott",
    year: "1979",
    color: false,
    duration: 117,
  },
];



app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Movie list");
});

app.get("/api/movies", (req, res) => { 
  res.status(200).json(movies);
  
});

app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});
