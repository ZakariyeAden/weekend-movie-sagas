import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import Grid from "@mui/material/Grid";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {/* Making it responsive on all devices by using mui Grid */}
        <Grid container spacing={2}>
          {movies.map(movie => {
            return (
              <Grid item lg={2} md={4} xs={7}>
                <div key={movie.id}>
                  <img src={movie.poster} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </section>
    </main>
  );
}

export default MovieList;
