import { Grid, Container, Button } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  // Hooks
  const movie = useSelector(store => store.movieItem);
  const history = useHistory();
  // Need use params and use connect from react redux
  const { id } = useParams();

  console.log("id:", id);

  return (
    <div>
      <Container>
        <div key={movie.id}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <p>{movie.description}</p>
            </Grid>
          </Grid>
          {/* Route back to Home page*/}
          <Button variant="contained" onClick={() => history.push("/")}>Go back home</Button>
        </div>
      </Container>
    </div>
  );
};


export default MovieDetails;
