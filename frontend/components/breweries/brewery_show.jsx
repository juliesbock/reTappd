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
        {brewery.name} 
        {brewery.location}
        {brewery.description}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(BreweryShow)