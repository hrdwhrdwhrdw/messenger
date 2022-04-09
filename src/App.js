import React, { Component, lazy, Suspense } from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Preloader from "./Components/common/Preloader/Preloader";
import { connect } from "react-redux";
import { setInitializing } from "./redux/app-reducer";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));
const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./Components/Profile/ProfileContainer"));
const LoginContainer = lazy(() => import("./Components/Login/LoginContainer"));

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
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </Suspense>
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

const MyApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MyApp;
