import {
  RECIEVE_ALL_BREWERIES,
  RECIEVE_BREWERY
} from '../actions/brewery_actions';

const breweriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState)
  
  switch (action.type) {
    case RECIEVE_ALL_BREWERIES:
      return Object.assign({}, nextState, action.breweries)
    case RECIEVE_BREWERY:
      return Object.assign({}, nextState, {[action.brewery.id]: action.brewery})
    default:
      return nextState;
  }
};

export default breweriesReducer;