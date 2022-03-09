import React, { Component } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/auth-reducer";

import "./Header.scss";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then((response) => {
        let {id, login, email} = {...response.data.data}
        this.props.setAuthData(id, login, email);
      });
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
  setAuthData,
})(HeaderContainer);
