import React from 'react';
import { Link } from 'react-router-dom';

const BreweryIndexItem = (props) => {
  if (props.brewery === null) return null;

  return(
    <div>
      <div className="brew-idx-box">
        <div className="beer-photo-box">
          <Link to={`/breweries/${props.brewery.id}`}>
            <img className='brew-photo' src={props.brewery.photo} />
          </Link>
        </div>
        <div className="brew-name-location">
          <Link to={`/breweries/${props.brewery.id}`}>
            <h1>{props.brewery.name}</h1>
          </Link>
          <h3>{props.brewery.location}</h3>
          {/* <h1>{props.brewery.description}</h1> */}
        </div>
      </div>
    </div>
  )
}

export default BreweryIndexItem;