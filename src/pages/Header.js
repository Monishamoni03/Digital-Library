import React from 'react'
import library from './libraryImage.jpg'
import "./Header.css";
 
function Header() {
  return (
    <div className = 'header-container'>
        <img src = { library } alt = "library" height = {530} width = {1280} className = "responsive" />
        <h1>Welcome to Online Library System </h1>
    </div>
  )
}

export default Header;