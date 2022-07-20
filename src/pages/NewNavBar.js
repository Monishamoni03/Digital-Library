import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaBars, FaTimes } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.css';

function NewNavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
  <header>
      <h3>Library Management System</h3>
      <nav ref = {navRef}>
          <a href = '/'>Home</a>
          <a href = '/about'>About Us</a>
          <a href = '/contact'>Contact Us</a>
          <a href = '/login'>Student</a>
          <a href = '/admin'>Admin</a>
          <button className = 'nav-btn nav-close-btn' onClick = {showNavbar}>
              {/* <FaTimes /> */}
              <FontAwesomeIcon icon="check-square" />
          </button>
          <button onClick = {showNavbar}>
              {/* <FaBars /> */}
          </button>
      </nav>
  </header>
    );
}

export default NewNavBar;