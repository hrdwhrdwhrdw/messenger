import "./App.css";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Dialogs />
      {/* <Profile /> */}
    </div>
  );
};

export default App;
