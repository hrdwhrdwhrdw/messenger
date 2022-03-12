import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthData } from "../../redux/auth-reducer";

import "./Header.scss";

class HeaderContainer extends Component {
  componentDidMount() {
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    //   .then((response) => {
    //     let {id, login, email} = {...response.data.data}
    //     this.props.setAuthData(id, login, email);
    //   });
    this.props.getAuthData()
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
})(HeaderContainer);
