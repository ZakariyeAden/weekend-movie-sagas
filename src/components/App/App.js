import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieForm from "../MovieForm/MovieForm";
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page : need to change the path to '/details:id */}
        <Route path="/details">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/addmovie">
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
