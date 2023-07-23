import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
const MovieGenre = () => {
  const genres = useSelector(state => state.genres);
  return (
    <div>
  {/* Doing it in separate component but should
      do it in MovieList and do condional render to display
      once selected a genre and movie data */}
      {genres.map(genre => {
        return (
          <div key={genre}>
            <Select
              sx={{
                marginTop: 35,
                width: 250,
                height: 50,
              }}
            >
              {genre.name}
            </Select>
            <MenuItem>{genre.name}</MenuItem>

            <section>
              <img src={genre.poster} alt={genre.title} />
              <h3>{genre.title}</h3>
              <p>{genre.description}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MovieGenre;
