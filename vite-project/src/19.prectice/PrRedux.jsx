import React from "react";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Amount from "./ui/count/Amount";

export default function PrRedux() {
  return (
    <div>
      <Provider store={store}>
        <Amount/>
      </Provider>
    </div>
  );
}