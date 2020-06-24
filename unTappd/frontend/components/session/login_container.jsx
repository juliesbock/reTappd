import LoginForm from './login';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { login } from '../../util/session_api_util';


const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mDTP = dispatch => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(LoginForm);