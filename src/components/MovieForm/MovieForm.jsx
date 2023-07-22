import { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";
const MovieForm = () => {
  // HOOKS
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieImage, setMovieImage] = useState("");
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

  let movieData = {
    title: movieTitle,
    description: movieDescription,
    poster: movieImage,
  };
  const submitMovieHandler = event => {
    console.log("Movie submitted!", movieData);
  };
  return (
    <form onSubmit={submitMovieHandler}>
      <h2>Add a Movie</h2>
      <TextField
        id="outlined-basic"
        label="Movie title"
        variant="outlined"
        type="text"
        onChange={handleTitleChange}
      />
      <TextField
        id="outlined-basic"
        label="Movie image"
        variant="outlined"
        type="text"
        onChange={handleImageChange}
      />
      <TextField
        id="outlined-basic"
        label="Movie description"
        variant="outlined"
        type="text"
        onChange={handleDescriptionChange}
      />
      <Button variant="contained" type="submit">
        Add Movie
      </Button>
    </form>
  );
};

export default MovieForm;
