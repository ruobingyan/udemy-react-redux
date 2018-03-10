// State argument is not application state, only the state
// the reducer is responsible for

// Always return a fresh object, not a mutated one

export default function(state = null, action) {
  switch (action.type) {
  case "BOOK_SELECTED":
    return action.payload;
  }

  return state;
}
