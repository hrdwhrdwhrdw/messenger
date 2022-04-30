import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/thunks/authThunks.ts";
import "./Header.scss";
import { getEmail, getLogin, getUserId } from "../../redux/selectors/header-selectors";
import { getIsAuth } from "../../redux/selectors/login-selectors";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    login: getLogin(state),
    email: getEmail(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
