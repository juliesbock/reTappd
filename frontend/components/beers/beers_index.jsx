import React from 'react';
import BeerIndexItem from './beers_index_item';
import Header from '../header/navbar_container';



class BeerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render(){
    const BeerIndexItems = this.props.beers.map(beer => {
      return (
        <BeerIndexItem
          key={beer.id}
          beer={beer}
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

//   <div>

//     <h1>Beers: </h1>
//     {beers.map(beer => (
//       <BeerIndexItem
//         beer={beer}
//         key={beer.id}
//       />
//     ))}
//   </div>
// );

export default BeerIndex;
