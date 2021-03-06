import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = (props) => {
  if (props.beer === null) return null;

  if (props.beer.ibu === null) props.beer.ibu = "0";
  let breweryId = props.brewery ? props.brewery.id : "";
  let breweryName = props.brewery ? props.brewery.name : "";

  return (
    <div>
      <div className="beer-show-all">
        <div className="beer-show-box">
          <div className="beer-info-top">
            <div className="beer-photo-box">
              <Link to={`/beers/${props.beer.id}`}>
                <img className='beer-photo' src={props.beer.photo} />
              </Link>
            </div>
            <div className='beer-info-top-details'>
              <Link className="no-underline-link" to={`/beers/${props.beer.id}`}>
                <h1>{props.beer.name}</h1>
              </Link>
              <Link to={`/breweries/${breweryId}`} className="no-underline-link">
                <h2>{breweryName}</h2>
              </Link>
              <p>{props.beer.style}</p>
            </div>
          </div>
          <div className="beer-info-middle">
            <p className="beer-middle-content">{props.beer.abv}% ABV</p>
            <p className="beer-middle-content">{props.beer.ibu} IBU</p>
            <p className="beer-middle-content">Rating: 4.5</p>
            <p className="beer-middle-content">Reviews: 5</p>
          </div>
          <div className="beer-info-description">
            <p>{props.beer.description}</p>
            <div className="checkin-beer-show">
              <Link to={`/beers/${props.beer.id}`}>
                <div className="checkin-box">
                  <i className="fa fa-check"> </i>
                </div>
              </Link>
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

export default BeerIndexItem;