import SessionForm from './session/session_form';
import { connect } from 'react-redux';
import { logIn, clearErrors } from '../../actions/session_actions';


const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mDTP = dispatch => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm);