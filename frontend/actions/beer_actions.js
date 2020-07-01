export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS"
export const RECEIVE_BEER = "RECEIVE_BEER"
export const RECEIVE_BEER_ERRORS = 'RECEIVE_BEER_ERRORS'
import * as APIUtil from "../util/beer_util"

const receiveAllBeers = () => ({
  ype: RECEIVE_ALL_BEERS,
  beers
})

const receiveBeer = (beer) => ({
  type: RECEIVE_BEER,
  beer
})

const receiveErrors = errors => ({
  type: RECEIVE_BEER_ERRORS,
  errors
});

export const fetchBeers = () => dispatch => (
  APIUtil.fetchBeers()
    .then((beers) => dispatch(receiveAllBeers(beers)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchBeer = beer => dispatch => (
  APIUtil.fetchBeer(beer)
    .then((beer) => dispatch(receiveBeer(beer)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
)



