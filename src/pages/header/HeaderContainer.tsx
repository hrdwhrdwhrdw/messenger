import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/thunks/authThunks";
import "./Header.scss";
import { getEmail, getLogin, getUserId } from "../../redux/selectors/header-selectors";
import { getIsAuth } from "../../redux/selectors/login-selectors";
import { RootState } from '../../redux/store/store';

export type PropTypes = {
  isNavExpanded: boolean
}

class HeaderContainer extends Component<PropTypes & MapStatePropsType & MapDispatchPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: RootState) => {
  return {
    userId: getUserId(state),
    login: getLogin(state),
    email: getEmail(state),
    isAuth: getIsAuth(state),
  };
};

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
  logout:() => void;
}

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
