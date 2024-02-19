import { configureStore } from "@reduxjs/toolkit";
import pointReduser from "../fetures/pointer";

export default configureStore({
  reducer: {
    Point:pointReduser,
  },
});



