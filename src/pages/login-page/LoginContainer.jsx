import { connect } from "react-redux";
import { loginUser } from "../../redux/thunks/authThunks";
import Login from "./Login";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    login: (login, password, remember, captcha) => {
      dispatch(loginUser(login, password, remember, captcha));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
