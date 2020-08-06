import Header from '../header/navbar_container';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions';


const mSTP = ({entities}, ownProps) => {
  return {
    brewery: entities.breweries[ownProps.match.params.breweryId]
  }
}

const mDTP = dispatch => {
  return {
    fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId))
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
    window.scrollTo(0, 0)

    return(
      <div>
        <Header/>
        <div className="beer-show-all">
          <div className="beer-show-box">
            <div className='brew-show-top'>
              <div className="beer-photo-box">
                <img className='beer-photo'/>
              </div>
              <div className='beer-info-top-details'>
                <h1>{brewery.name} </h1>
                <h2>{brewery.location}</h2>
              </div>
            </div>
            <div className="beer-info-middle">
              <p className="beer-middle-content">Rating: 4.5</p>
              <p className="beer-middle-content">Reviews: 5</p>
            </div>
            <div className='beer-info-description'>
              {brewery.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(BreweryShow)