import { connect } from 'react-redux';
import BeerShow from './beers_show';
import { fetchBeer } from '../../actions/beer_actions';
import { fetchBrewery, fetchBreweries} from '../../actions/brewery_actions'

const mSTP = ({ entities, session }, ownProps) => {
  return {
    beer: entities.beers[ownProps.match.params.beerId],
    breweries: entities.breweries,
    // user_id: session.id
  }
}

const mDTP = dispatch => ({
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(mSTP, mDTP)(BeerShow);