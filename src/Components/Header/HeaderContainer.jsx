import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthData, logout } from "../../redux/auth-reducer";

import "./Header.scss";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  getAuthData,
  logout,
})(HeaderContainer);
