import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE_ITEM", fetchIndivualMovie);
  yield takeEvery("ADD_MOVIES", addMovies);
  yield takeEvery("FETCH_GENRES", fetchGenreMovies)
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
    // Catch Errors
  } catch {
    console.log("get all error");
  }
}
// Details/Indiviual movie page
function* fetchIndivualMovie(action) {
  try {
    const movies = yield axios.get(`/api/movie/${action.payload}`);
    yield put({ type: "SET_MOVIE_ITEM", payload: movies.data });
    console.log("Indiviual movie:", movies.data);
    // Catch Errors
  } catch (err) {
    console.log("ERRORS in getting indiviual movie", err);
  }
}
// Get Genres
function* fetchGenreMovies(action) {
  try {
    const genreMovie = yield axios.get(`/api/genre`);
    // See the log for Genres
    console.log("Genre Movies:", genreMovie);
    yield put({ type: "SET_GENRES", payload: genreMovie.data });
    // Catch Errors
  } catch (err) {
    console.log("ERROR in getting genre movies:", err);
  }
}
// POST: post the data recieved in the DB and display it in the DOM!
function* addMovies(action) {
  try {
    yield axios.post("/api/movie/", action.payload);
    // Update in the GET
    yield put({ type: "FETCH_MOVIES" });
    // Catch Errors
  } catch (err) {
    console.log("ERROR in posting Movies in addMovies:", err);
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};
// Indiviual movie item
const movieItem = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE_ITEM":
      return action.payload;
    default:
      return state;
  }
};
// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieItem,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
