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
export default rootSaga;