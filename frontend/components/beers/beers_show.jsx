import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/navbar_container';
import BeerIndexItem from './beers_index_item';



class BeerShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId)
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.beerId !== this.props.match.params.beerId) {
      this.props.fetchBeer(this.props.match.params.beerId)
    }
  }

  render(){
    if (this.props.beer === undefined) return null;
    if (this.props.beer.ibu === null) this.props.beer.ibu = "0";

    return(
      <div>
        <Header />
        <div className="beer-show-all">
          <div className="beer-show-box">
            <div className="beer-info-top">
              <div className="beer-photo-box">
              <img className='beer-photo' src={this.props.beer.photo}/>
              {/* <img className='beer-photo' src=""/> */}
              </div>
              <div className='beer-info-top-details'>
                <h1>{this.props.beer.name}</h1>
                <a href="" className="no-underline-link"><h2>Brewery: {this.props.beer.brewery_id}</h2></a>
                <p>{this.props.beer.style}</p>
              </div>
            </div>
            <div className="beer-info-middle">
              <p className="beer-middle-content">{this.props.beer.abv}% ABV</p>
              <p className="beer-middle-content">{this.props.beer.ibu} IBU</p>
              <p className="beer-middle-content">Rating: 4.5</p>
              <p className="beer-middle-content">Reviews: 5</p>
            </div>
            <div className="beer-info-description">
              <p>{this.props.beer.description}</p>

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














///////////////////////////////////

// <>
  // class BeerShow extends React.Component {

  //   constructor(props) {
  //     super(props)

  //     this.state = {
  //       openModal: false,
  //       more: false
  //     }

  //     this.handleModal = this.handleModal.bind(this);
  //     this.handleMore = this.handleMore.bind(this);
  //   }

  //   handleMore(e) {
  //     e.preventDefault();
  //     if (this.state.more) {
  //       this.setState({ more: false })
  //     } else {
  //       this.setState({ more: true })
  //     }
  //   }

  //   handleModal(e) {
  //     e.preventDefault();
  //     if (this.state.openModal === false) {
  //       this.setState({
  //         openModal: true
  //       })
  //     } else {
  //       this.setState({
  //         openModal: false
  //       })
  //     }
  //   };

  //   componentDidMount() {
  //     this.props.fetchBeer(this.props.match.params.beerId)
  //   }

  //   render() {
  //     if (!this.props.beer || !this.props.beer.id) {
  //       return null
  //     } else {
  //       return (
  //         <div className="beer-show-container">
  //           <div className="beer-show">
  //             <header>
  //               <div className="beer-container">
  //                 <div className="beer-show-container-top">
  //                   <div className="beer-info-left">
  //                     <img className="beer-show-label" src={this.props.beer.label} />
  //                     <div className="beer-show-info">
  //                       <h1 className="beer-name">{this.props.beer.name}</h1>
  //                       <Link className="beer-show-brewery" to={`/brewery/${this.props.beer.brewery.id}`}> {this.props.beer.brewery.name}</Link>
  //                       <h2 className="brewery-name" >{this.props.beer.brewery_id}</h2>
  //                       <h3>{this.props.beer.style}</h3>
  //                     </div>
  //                   </div>
  //                   <div className="review-modal-container">
  //                     <div className="review-modal-button" onClick={this.handleModal}><FontAwesomeIcon className="checkin-beer" icon={faCheck} color="white" size="2x" /></div>
  //                     <span className="tooltip">Check-in this Beer</span>
  //                   </div>
  //                 </div>
  //                 <div className="beer-container-bottom">
  //                   <h4>{this.props.beer.abv} % ABV</h4>
  //                   <h4>{this.props.beer.ibu} IBU</h4>
  //                   <h4><div className="rating-container" ><Rating rating={this.props.beer.rating} /></div></h4>
  //                   <h4>{this.props.beer.reviews.length} Reviews</h4>
  //                 </div>
  //                 <h4 className="beer-description">{this.props.beer.description.length > 150 && !this.state.more ?
  //                   this.props.beer.description.slice(0, 150) + "..."
  //                   :
  //                   this.props.beer.description
  //                 }
  //                   {this.props.beer.description.length > 150 ?
  //                     <a className="more-button" onClick={this.handleMore}>
  //                       {this.state.more ?
  //                         <span>Show less</span>
  //                         :
  //                         <span>Show more</span>
  //                       }
  //                     </a>
  //                     :
  //                     null
  //                   }
  //                 </h4>
  //                 <div className="review-border"></div>
  //               </div>
  //             </header>
  //             <section className="beer-show-review-container">
  //               {this.props.beer.reviews.map((review, idx) => {
  //                 return <Review review={review} beer={this.props.beer} user={review.user} key={idx} />
  //               })}
  //             </section>
  //             {this.state.openModal === true ?
  //               <ReviewModal
  //                 beer={this.props.beer}
  //                 user_id={this.props.user_id}
  //                 createReview={this.props.createReview}
  //                 handleModal={this.handleModal}
  //               /> : null}
  //           </div>
  //         </div>
  //       )
  //     }
  //   }
  // };

  // export default BeerShow;
  //</>