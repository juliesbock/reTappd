import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/navbar_container'



class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId)
  }

  render() {
    if (this.props.beer === undefined) return null;

    if (this.props.beer.ibu === null) this.props.beer.ibu = "n/a"

    return (
      'hello'
    )
  }
}

export default BeerIndexItem;
