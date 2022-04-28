import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './components/home';
import Login from './components/login';
import Signup from './components/signup';


function App() {


  return (
    <>

        <Router>

          <Navbar/>

          <div className = "container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
          </div>

        </Router>

    </>
  );
}

export default App;
