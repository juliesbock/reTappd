import LoginForm from './login';
import { connect } from 'react-redux';
import { login, receiveErrors, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mDTP = dispatch => ({
  submitLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(LoginForm);


