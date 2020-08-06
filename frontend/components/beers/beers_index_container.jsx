import { connect } from 'react-redux';
import BeerIndex from './beers_index';
import { fetchBeers } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_actions'


const mSTP = state => {
  return{
    beers: Object.values(state.entities.beers),
    breweries: state.entities.breweries
  }
}

const mDTP = dispatch => ({
  fetchBeers: () => dispatch(fetchBeers()),
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(mSTP, mDTP)(BeerIndex);