import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mSTP = ({ session }) => {
  return {
    currentUser: session
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mSTP, mDTP)(NavBar);