import React, { Component } from "react";
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import NewContact from './pages/NewContact';
import Student from './pages/Student';
import Admin from './pages/Admin';

class App extends Component {
  render() {
  return (
      <div className = "App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} /> 
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<NewContact />} /> 
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Student />} /> 
        </Routes>
        <Routes>
          <Route exact path="/log" element={<Admin />} /> 
        </Routes>
      </div>
  );
  }
}

export default App;