import React from 'react';
import './App.css';
import Navbar from "./features/components/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./features/containers/home";
import Login from "./features/containers/login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>

    </div>

  );
}

export default App;
