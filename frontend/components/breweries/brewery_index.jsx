import Header from '../header/navbar_container';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBreweries } from '../../actions/brewery_actions';
import BreweryIndexItem from './brewery_index_item';

const mSTP = state => ({
  breweries: Object.values(state.entities.breweries)
})

const mDTP = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries())
})


class BreweryIndex extends React.Component{
  componentDidMount(){
    this.props.fetchBreweries();
  }

  render(){
    const BreweryIndexItems = this.props.breweries.map(brewery => {
      return (
        <BreweryIndexItem
          key = {brewery.id}
          brewery = {brewery}
        />
      )
    })

    return(
      <>
        <Header/>
        <div className="brew-index-container">
          <div className='brew-count'>
            {this.props.breweries.length} Breweries
          </div>
          {BreweryIndexItems}
        </div>
      </>
    )
  }
}

export default connect(mSTP, mDTP)(BreweryIndex);
