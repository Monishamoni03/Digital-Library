import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';

class AdminNavBar extends Component {
  render() {
  return ( 
    <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Library Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="/login">Student</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin">Admin</a>
      </li> */}
    </ul>
  </div>
</nav>
    </>
  );
  }
}

export default AdminNavBar;