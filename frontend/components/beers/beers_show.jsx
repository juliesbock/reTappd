import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/navbar_container';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
    this.props.fetchBreweries();
    // debugger;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.beerId !== this.props.match.params.beerId) {
      this.props.fetchBeer(this.props.match.params.beerId)
    }
  }

  render() {
    if (this.props.beer.ibu === null) this.props.beer.ibu = "0";
    
    let beer = this.props.beer || null;
    let brewery = this.props.breweries[this.props.beer.breweryId];
    // let breweryId = this.props.beer.brewery_id;
    // if (this.props.brewery === undefined) this.props.brewery = null;

    window.scrollTo(0, 0)
    return (
      <div>
        <Header />
        <div className="beer-show-all">
          <div className="beer-show-box">
            <div className="beer-info-top">
              <div className="beer-photo-box">
                <img className='beer-photo' src={beer.photo} />
              </div>
              <div className='beer-info-top-details'>
                <h1>{beer.name}</h1>
                <Link to={`/breweries/${beer.breweryId}`} className="no-underline-link">
                  <h2>{brewery.name}</h2>
                </Link>
                <p>{beer.style}</p>
              </div>
            </div>
            <div className="beer-info-middle">
              <p className="beer-middle-content">{beer.abv}% ABV</p>
              <p className="beer-middle-content">{beer.ibu} IBU</p>
              <p className="beer-middle-content">Rating: 4.5</p>
              <p className="beer-middle-content">Reviews: 5</p>
            </div>
            <div className="beer-info-description">
              <p>{beer.description}</p>
              <div className="checkin-beer-show">
                <a className="checkin-box">
                  <i className="fa fa-check">  </i>
                </a>
                <a className="checkin-box">
                  <i className="fa fa-plus">  </i>
                </a>
                {/* <div className="checkin-dropdown-content">
                  <ul className="checkin-dropdown-list">
                    <p>Check-in this Beer</p>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerShow;
