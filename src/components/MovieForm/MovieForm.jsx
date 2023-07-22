import { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";
const MovieForm = () => {
  // HOOKS
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    console.log("added title!");
    // Set the user input for title
    setMovieTitle(event.target.value);
  };
  const handleDescriptionChange = event => {
    console.log("added description!");
    // Set the user input for description
    setMovieDescription(event.target.value);
  };
  const handleImageChange = event => {
    console.log("added image!");
    // Set the user input for image
    setMovieImage(event.target.value);
  };
// Set the data into object
  let movieData = {
    title:movieTitle,
    poster:movieImage,
    description:movieDescription
  }
  const submitMovieHandler = event => {
    event.preventDefault();
    console.log("Movie submitted!", );
    dispatch({type: 'ADD_MOVIES', payload:  movieTitle, movieDescription, movieImage})
  };
  return (
    <form >
      <h2>Add a Movie</h2>
      <TextField
        id="outlined-basic"
        label="Movie title"
        variant="outlined"
        type="text"
        onChange={handleTitleChange}
        value={movieTitle}
      />
      <TextField
        id="outlined-basic"
        label="Movie image"
        variant="outlined"
        type="text"
        onChange={handleImageChange}
        value={movieImage}
      />
      <TextField
        id="outlined-basic"
        label="Movie description"
        variant="outlined"
        type="text"
        onChange={handleDescriptionChange}
        value={movieDescription}
      />
      <Button variant="contained" type="submit" onClick={submitMovieHandler}>
        Add Movie
      </Button>
    </form>
  );
};

export default MovieForm;
