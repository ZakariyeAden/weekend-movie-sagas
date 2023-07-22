import { useEffect } from "react";
import { Grid, CardMedia, Typography, Card } from "@mui/material";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
const MovieDetails = () => {
  const movies = useSelector(store => store.movies);
  // Hooks
  const dispatch = useDispatch();
  const  id  = useParams();

  // Get the indivual movie
  useEffect(() => {
    dispatch({
      type: "FETCH_MOVIE_ITEM",
      payload:  id ,
    });
  }, []);
  console.log("Id", id);
  return (
    <div>
      {movies.map(movie => {
        return (
          <Card
            key={movie.id}
            sx={{ maxWidth: 345 }}
            md={{ maxWidth: 345 }}
            lg={{ maxWidth: 345 }}
          >
            <CardMedia
              sx={{ height: 280 }}
              image={movie.poster}
              title={movie.title}
            />
              <Typography gutterBottom variant="h5" component="div">
                    {movie.description}
                  </Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default MovieDetails;
