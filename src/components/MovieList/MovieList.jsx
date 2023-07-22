import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Grid, CardMedia, Typography, Card } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

function MovieList(movie) {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(store => store.movies);

  //   Get the movie Item Clicked on and head to the details.
  // Using this method but will change it to useParams!
  function movieItem(id) {
      console.log("Movie item:", id);
      dispatch({ type: "SET_MOVIE_ITEM", payload: id });
      history.push('/details')
    }

    // Load all of the movies
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
              <Grid item lg={2} md={4} xs={6}>
                {/* <Link to={`/details/${movie.id}`}> */}
                <Card
                  key={movie.id}
                  sx={{ maxWidth: 345 }}
                  md={{ maxWidth: 345 }}
                  lg={{ maxWidth: 345 }}
                  onClick={() => movieItem(movie)}
                >
                  <CardMedia
                    sx={{ height: 280 }}
                    image={movie.poster}
                    title={movie.title}
                  />
                </Card>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                {/* </Link> */}
              </Grid>
            );
          })}
        </Grid>
      </section>
    </main>
  );
}

export default MovieList;
