import { configureStore } from "@reduxjs/toolkit";
import amounReduser from "../fetures/amount";

export default configureStore({
  reducer: {
    Amount:amounReduser,
  },
});



