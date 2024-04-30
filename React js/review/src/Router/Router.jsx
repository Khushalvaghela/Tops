import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchData from "../ui/pages/WatchData";
import ReviewShow from "../ui/pages/ReviewShow";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WatchData />} />
        <Route path="/reviewShow" element={<ReviewShow />} />
      </Routes>
    </BrowserRouter>
  );
}
