import Header from '../header/navbar_container';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCheckins } from '../../actions/checkin_actions'

const mSTP = state => ({
  checkins: Object.values(state.entities.checkins)
})

const mDTP = dispatch => ({
  fetchAllCheckins: () => dispatch(fetchAllCheckins())
})

class CheckinIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllCheckins();
  }

  render(){
    return 'hello'
  }
}

export default connect(mSTP, mDTP)(CheckinIndex)