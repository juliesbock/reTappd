import { connect } from 'react-redux';
import BeerShow from './beers_show';
import { fetchBeer } from '../../actions/beer_actions';

const mSTP = ({ entities, session }) => ({
  beer: entities.beers,
  user_id: session.id
})

const mDTP = dispatch => ({
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
})

export default connect(mSTP, mDTP)(BeerShow);