import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextField, Button } from "@mui/material";
import "./MovieForm.css";
const MovieForm = () => {
  // HOOKS
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // Submit 
  const submitMovieHandler = event => {
    event.preventDefault();
    // Log to see if submmited
    console.log("Movie submitted!");
    dispatch({
      type: "ADD_MOVIES",
      // The data to submit in dispatch 
      payload: {
        title: movieTitle,
        poster: movieImage,
        description: movieDescription,
      },
    });
  };
  return (
    <form onSubmit={submitMovieHandler}>
      <h2>Add a Movie</h2>
      <div>
        <TextField
          id="outlined-basic"
          label="Movie title"
          variant="outlined"
          type="text"
          // Get the user Input for Title
          onChange={e => setMovieTitle(e.target.value)}
          value={movieTitle}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Movie image"
          variant="outlined"
          type="text"
          // Get the user Input for Image
          onChange={e => setMovieImage(e.target.value)}
          value={movieImage}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Movie description"
          variant="outlined"
          type="text"
          // Get the user Input for Description
          onChange={e => setMovieDescription(e.target.value)}
          value={movieDescription}
        />
      </div>
      <div className="btn-action">
        <Button variant="contained" type="submit">
          Add Movie
        </Button>
        {/* Go back to home page */}
        <Button variant="contained" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default MovieForm;
