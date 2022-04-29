import React, { lazy, Suspense } from "react";
import { useEffect, useState } from "react";

import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import HeaderContainer from "./pages/header/HeaderContainer";
import { connect } from "react-redux";
import { setInitializing } from "./redux/thunks/appThunks";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppPreloader from "./components/AppPreloader/AppPreloader";
import Preloader from "./components/Preloader/Preloader";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "./components/Button/Button";

const UsersContainer = lazy(() => import("./pages/users-page/UsersContainer"));
const DialogsContainer = lazy(() =>
  import("./pages/dialogs-page/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./pages/profile-page/ProfileContainer")
);
const LoginContainer = lazy(() => import("./pages/login-page/LoginContainer"));

const App = (props) => {
  let [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    props.setInitializing();
  }, [props]);

  const expandNav = () => {
    setIsNavExpanded(true);
  };

  const shrinkNav = () => {
    setIsNavExpanded(false);
  };

  if (!props.initialized) return <AppPreloader />;
  return (
    <div className="app-wrapper">
      <div className="app-wrapper__container">
        {isNavExpanded ? (
          <div className="app__open-close wider">
            <CustomButton>
              <CloseIcon
                className="app__icon-menu"
                onClick={() => shrinkNav()}
              />
            </CustomButton>
          </div>
        ) : (
          <div className="app__open-close">
            <CustomButton>
              <MenuIcon
                className="app__icon-menu"
                onClick={() => expandNav()}
              />
            </CustomButton>
          </div>
        )}
        <HeaderContainer isNavExpanded={isNavExpanded} />
        <Navbar isNavExpanded={isNavExpanded} shrinkNav={() => shrinkNav()} />
        <div
          className={"app-wrapper__content" + (isNavExpanded ? " hidden" : "")}
        >
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
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = connect(mapStateToProps, { setInitializing })(App);

const MyApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppContainer />
          </MuiThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MyApp;
