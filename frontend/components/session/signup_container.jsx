import SignupForm from './signup';
import { connect } from 'react-redux';
import { signup, receiveErrors, clearErrors } from '../../actions/session_actions';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = dispatch => ({
  submitSignup: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);
