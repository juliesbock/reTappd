import { RECEIVE_BEER, RECEIVE_ALL_BEERS } from "../actions/beer_actions";


const beersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return Object.assign({}, nextState, action.beers)
    case RECEIVE_BEER:
      return Object.assign({}, nextState, {[action.beer.id]: action.beer})
    default:
      return nextState;
  }
}

export default beersReducer;