import React from 'react';
import BeerIndexItem from './beers_index_item';
import Header from '../header/navbar_container';



class BeerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchBreweries();
  }

  
  render(){
    window.scrollTo(0, 0)
    const BeerIndexItems = this.props.beers.map(beer => {
      return (
        <BeerIndexItem
          key={beer.id}
          beer={beer}
          brewery={this.props.breweries[beer.breweryId]}
        />
      )
    })
    
    return (
      <>
        <Header />
        {BeerIndexItems}
      </>
    )
  }
}

export default BeerIndex;
