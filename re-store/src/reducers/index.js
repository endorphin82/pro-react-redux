const initiallState = {
  books: []
};

const reducer = (state = initiallState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;