import { connect } from "react-redux";
import { loginUser } from "../../redux/thunks/authThunks";
import Login from "./Login";
import { compose } from "redux";
import { getCaptcha, getIsAuth } from "../../redux/selectors/login-selectors";

let mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state),
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
