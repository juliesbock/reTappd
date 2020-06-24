import SignupForm from './signup';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = dispatch => ({
  submitSignup: formUser => dispatch(signup(formUser)),
  errors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mSTP, mDTP)(SignupForm);
