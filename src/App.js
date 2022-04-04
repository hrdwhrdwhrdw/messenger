import React, { Component } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer, {
} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import Preloader from "./Components/common/Preloader/Preloader";
import { connect } from "react-redux";
import { setInitializing } from "./redux/app-reducer";
import store from "./redux/redux-store";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.setInitializing();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

window.store = store.getState();

const AppContainer = connect(mapStateToProps, { setInitializing })(App);

const MyApp =  () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default MyApp
