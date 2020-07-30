import {
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
} from '../actions/checkin_actions';

const CheckinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_ALL_CHECKINS:
      return Object.assign({}, action.checkins);
      // return Object.assign({}, nextState, action.checkins);
    case RECEIVE_CHECKIN:
      return Object.assign({}, nextState, {[action.checkin.id]: action.checkin});
    case REMOVE_CHECKIN:
      delete nextState[action.id]
      return nextState;
    default:
      return nextState;
  }
}

export default CheckinsReducer;