import Header from '../header/navbar_container';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions';
import { fetchBeers } from '../../actions/beer_actions';




// const mapStateToProps = state => ({
//   checkins: Object.values(state.entities.checkins),
//   users: state.entities.users,
//   beverages: state.entities.beverages,
//   breweries: state.entities.breweries,
//   currentUserId: state.session.id
// })

const mSTP = ({entities}, ownProps) => {
  console.log(entities)
  return {
    beers: entities,
    brewery: entities.breweries[ownProps.match.params.breweryId]
    // beers: entities.beers
    // beers: Object.values(state.entities.beers)
  }
}

const mDTP = dispatch => {
  return {
    fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId)),
    fetchBeers: () => dispatch(fetchBeers())
  }
}

class BreweryShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBrewery(this.props.match.params.breweryId);
  }

  render(){
    if (this.props.brewery === undefined) return 'no brewery here';
    let brewery = this.props.brewery;
    let beers = this.props.brewery.beers;
    console.log(beers)
    // let beers = this.props.beers;
    // let beers = entities.breweries[12].beers
    window.scrollTo(0, 0)

    return(
      <div>
        <Header/>
        <div className="beer-show-all">
          <div className="beer-show-box">
            <div className='brew-show-top'>
              <div className="beer-photo-box">
                {/* <img className='beer-photo'/> */}
                <Link to={`/breweries/${brewery.id}`}>
                  <img className='brew-photo' src={brewery.photo} />
                </Link>
              </div>
              <div className='beer-info-top-details'>
                <h1>{brewery.name}</h1>
                <h2>{brewery.location}</h2>
              </div>
            </div>
            <div className="beer-info-middle">
              <p className="beer-middle-content">Rating: 4.5</p>
              <p className="beer-middle-content">Reviews: 5</p>
            </div>
            <div className='brew-info-description'>
              <p>{brewery.description}</p>
            </div>
          </div>
          <div>

            {/* <h1>{beers}</h1> */}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(BreweryShow)