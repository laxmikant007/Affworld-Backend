import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register  from "./pages/Register";
import Advertisers from "./pages/Advertisers";
import Offers from "./pages/Offers";
import Affiliates from "./pages/Affiliates";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
     <BrowserRouter>

     
        <Navbar />
      <Routes>
       
          <Route path="/" exact element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/advertisers" element={<Advertisers/>} />
          <Route  path="/offers" element={<Offers/>} />
          <Route  path="/affiliates" element={<Affiliates/>} />

          <Route path="/products" element={<Products/>} />
          <Route path="/reports" element={<Reports/>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}
