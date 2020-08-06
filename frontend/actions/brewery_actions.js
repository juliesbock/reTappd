export const RECIEVE_ALL_BREWERIES = `RECIEVE_ALL_BREWERIES`;
export const RECIEVE_BREWERY = `RECIEVE_BREWERY`;
export const RECEIVE_BREWERY_ERRORS = 'RECEIVE_BREWERY_ERRORS'

import * as BrewAPIUtil from '../util/brewery_util'


const receiveAllBreweries = (breweries) => ({
  type: RECIEVE_ALL_BREWERIES,
  breweries
});

const receiveBrewery = (brewery) => ({
  type: RECIEVE_BREWERY,
  brewery
});

const receiveErrors = errors => ({
  type: RECEIVE_BREWERY_ERRORS,
  errors
});

export const fetchBreweries = () => dispatch => {
  return BrewAPIUtil.fetchBreweries()
  .then((breweries) => dispatch(receiveAllBreweries(breweries)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchBrewery = (breweryId) => dispatch => (
  BrewAPIUtil.fetchBrewery(breweryId)
    .then((brewery) => dispatch(receiveBrewery(brewery)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
)

// export const createBrewery = (brewery) => dispatch => {
//   return BrewAPIUtil.createBrewery(brewery)
//     .then((brewery) => dispatch(receiveBrewery(brewery)))
//     .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
// }

// export const updateBrewery = (brewery) => dispatch => {
//   return BrewAPIUtil.updateBrewery(brewery)
//     .then((brewery) => dispatch(receiveBrewery(brewery)))
//     .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
// }