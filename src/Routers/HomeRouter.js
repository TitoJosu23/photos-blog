import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import VerticalPhotos from "../components/VerticalPhotos";
import "../App.css";

export const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vertical" element={<VerticalPhotos />} />
        <Route
          path="*"
          element={
            <>
              <h1 className="text-center">Error 404</h1>
              <strong className="d-flex justify-content-center">
                this page does not exist...
              </strong>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
