import React from "react";
import "./App.scss";
import { Route, Routes} from "react-router-dom";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper__content">
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
