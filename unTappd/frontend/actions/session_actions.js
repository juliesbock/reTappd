export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
import * as APIUtil from "../util/session_api_util"

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const signup = (user) => dispatch => {
  debugger
  return(APIUtil.signup(user)  
    .then((userRes) => (dispatch(receiveCurrentUser(userRes))))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
)};

export const login = (user) => dispatch => (
  APIUtil.login(user).
    then((userRes) => (dispatch(receiveCurrentUser(userRes))))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
)

