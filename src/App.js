import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
};

export default App;
