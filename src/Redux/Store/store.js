import movies from '../Reducers/Movies.Reducer'
import genres from '../Reducers/Genre.Reducer'
import movieItem from '../Reducers/MovieItem.Reducer';
import rootSaga from '../Sagas/MovieSagas';
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Import saga middleware
import createSagaMiddleware from "redux-saga";

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
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
export default storeInstance;