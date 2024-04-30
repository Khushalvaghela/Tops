import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count";
import amounReduser from "../fetures/amount";
import pointReduser from "../fetures/pointer";

export default configureStore({
  reducer: {
    COUNT: countReducer,
    Amount:amounReduser,
    Point:pointReduser,
  },
});



