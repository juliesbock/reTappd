import Splash from "./splash";
import { connect } from "react-redux";

const mSTP = state => ({
  state
})

export default connect(mSTP, null)(Splash);