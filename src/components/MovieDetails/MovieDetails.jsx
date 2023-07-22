import { Grid, CardMedia, Typography, Card,Container } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  // Hooks
  const movie = useSelector(store => store.movieItem);
  const history = useHistory();
  return (
    <div>
      <Container maxWidth="xs">
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
      {/* Route back to Home page*/}
      <button onClick={() => history.push("/")}>Go back home</button>
      </Container>
    </div>
  );
};

export default MovieDetails;
