import React from "react";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Pointer from "./ui/count/Pointer";

export default function ProRedux() {
  return (
    <div>
      <Provider store={store}>
        <Pointer/>
      </Provider>
    </div>
  );
}