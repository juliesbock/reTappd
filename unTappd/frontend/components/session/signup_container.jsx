import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
});

export default connect(mSTP, mDTP)(SignupForm);
