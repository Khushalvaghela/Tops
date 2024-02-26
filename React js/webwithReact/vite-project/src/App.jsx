import { ToastContainer } from "react-toastify";

import "./App.css";
import Header from "./webpage/UI/Components/Header/Header";
import Footer from "./webpage/UI/Components/Footer/Footer";
import Router from "./webpage/router/Router";

function App() {
  return (
    <>
      <div className="appContainer">
        {/* <Project/> */}
        <Router />
        {/* <Header /> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
