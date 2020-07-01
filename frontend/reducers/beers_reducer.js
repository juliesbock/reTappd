import { RECEIVE_BEER, RECEIVE_ALL_BEERS } from "../actions/beer_actions";


const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  // const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return Object.assign({}, state, action.beers)
    case RECEIVE_BEER:
      return Object.assign({}, state, action.beer)
    default:
      return state;
  }
}

export default beersReducer;