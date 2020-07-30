import {
  RECIEVE_ALL_BREWERIES,
  RECIEVE_BREWERY,
  RECEIVE_BREWERY_ERRORS
} from '../actions/checkin_actions';

const BreweriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECIEVE_ALL_BREWERIES:
      return Object.assign({}, action.beers);
    case RECIEVE_BREWERY:
      return Object.assign({}, nextState, { [action.brewery.id]: action.brewery });
    default:
      return nextState;
  }
}

export default BreweriesReducer; 