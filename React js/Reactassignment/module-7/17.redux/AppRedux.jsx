import React from "react";
import Count from "./ui/count/Count";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Amount from "./ui/count/Amount";
import Pointer from "./ui/count/Pointer";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Count/>
        <Amount/>
        <Pointer/>
      </Provider>
    </div>
  );
}