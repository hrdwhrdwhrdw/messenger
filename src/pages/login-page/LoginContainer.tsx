import { connect } from "react-redux";
import { login } from '../../redux/thunks/authThunks';
import Login from "./Login";
import { compose } from "redux";
import { getCaptcha, getIsAuth } from "../../redux/selectors/login-selectors";
import { RootState } from "redux/store/store";

export type MapStatePropsType = {
  isAuth: boolean;
  captchaURL?: string;
};

export type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

let mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    isAuth: getIsAuth(state),
    captchaURL: getCaptcha(state),
  };
};

export default compose(connect(mapStateToProps, {login}))(Login);
