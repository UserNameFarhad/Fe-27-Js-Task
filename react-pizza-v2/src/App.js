import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./Pages/Home"
import pizzas from "./assets/pizzas.json"
import React from "react";
import NotFound from "../src/Pages/NotFound"
import { Route, RouterProvider, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;