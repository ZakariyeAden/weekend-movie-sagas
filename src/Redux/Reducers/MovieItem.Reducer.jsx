// Indiviual movie item
const movieItem = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE_ITEM":
      return action.payload;
    default:
      return state;
  }
};
export default movieItem;