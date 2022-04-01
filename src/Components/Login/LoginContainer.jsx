import { connect } from "react-redux";
import {
  loginUser
} from "../../redux/auth-reducer";
import Login from "./Login";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    login: (login, password, remember) => {
      dispatch(loginUser(login, password, remember))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Login);
