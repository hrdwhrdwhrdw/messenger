import React from "react";
import "./App.scss";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
