import { ToastContainer } from "react-toastify";

import "./App.css";
import Header from "./webpage/UI/Components/Header/Header";
import Footer from "./webpage/UI/Components/Footer/Footer";
import Router from "./webpage/router/Router";
import { Provider } from "react-redux";
import store from "./webpage/redux/app/store";

function App() {
  return (
    <>
      <div className="appContainer">
        <Provider store={store}>
          {/* <Project/> */}
          <Router />
          {/* <Header /> */}
        </Provider>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
