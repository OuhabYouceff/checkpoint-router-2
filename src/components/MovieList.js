import MovieCard from "./MovieCard";
// import Filter from "./Filter";
import { useState} from "react";
import React from "react";
import data from "./datas.json";
// import { Route, Routes, useNavigate } from 'react-router-dom';
import "../App.css";
import { createBrowserRouter,RouterProvider ,Link,Route,Routes} from "react-router-dom";
import greeting from "./greeting";
import Address1 from "./Address";

const List = () => {
  // const navigate = useNavigate();
  // const [MoviesComponents, setMoviesComponent] = useState();
  // const [FilterState, SetFilterState] = useState();

  const [movies, setMovies] = useState(data);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleSubmit = (event) => {
    AddMovie();
    setName("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailer("");

    event.preventDefault();
  };
  const AddMovie = () => {
    setMovies([
      ...movies,
      {
        title: name,
        description: description,
        posterURL: posterURL,
        rating: rating,
        trailer: trailer,
      },
    ]);
  };
  

  function handleRating(event) {
    setRatingFilter(event.target.value);
    const newList = data.filter(
      (movie) => movie.rating > parseInt(event.target.value)
    );
    setMovies(newList);
  }
  // const handleClick = () => {
  //     console.log('done!');
  //     //etat='yes';
  //     //console.log(etat);

  // };
  const router =createBrowserRouter([
    {path:"/",element:<MovieCard/>}
  ])
  return (
    <div className="List">
      <div className="AddForm">
        <h1> Add a movie</h1>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>{" "}
          <input
            type="text"
            name="name"
            placeholder="Movie Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <br />
          <label>Description: </label>
          <br />
          <textarea
            name="description"
            placeholder="Movie Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <label>Poster URL: </label>{" "}
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          ></input>
          <br />
          <label>Rating: </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          ></input>
          <label>Trailer: </label>
          <input
            type="text"
            name="trailer"
            placeholder="Trailer URL"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
          ></input>
          <br />
          <button type="submit">Add !</button>
        </form>
      </div>
      <div className="MoviesComponents">
        {/* <Filter SetFilter={SetFilter}/> */}
        <div>
          <h3>show movie above {ratingFilter}</h3>
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            onchange={handleRating}
            defaultValue
          ></input>
        </div>
        <div className="movies">
          {movies.map((movie) => (
            <Link  to="/description" ><MovieCard movie={movie} /></Link>
          ))}
         
         <Routes>
            {/* <Route path="/" element={<MovieCard/>}/> */}
            <Route path="/description" element={<Address1/>}/>
            </Routes>
        </div>
        
      </div>
    </div>
    
  );
};

export default List;
