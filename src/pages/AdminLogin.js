import React, { Component } from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
// import Admin from './Admin';

class AdminLogin extends Component {
 render() {
  return (
    <div>
      <NavBar />
    <div className = 'login-student'>
      <div className = 'login-container'>
        <h3>Admin Login</h3>
        <form className = 'login-form '>
          <center>
            <input type = 'email' placeholder = 'Email address'  />
          </center>
          <center>
            <input type = 'password' placeholder = 'Password' />
          </center>
          <center>
            <Link to = "/adminpage">
            <button type = 'submit' className = 'login-login'>Login</button>
            </Link>
            {/* <button type = 'submit' className = 'login-login' onClick = {Admin}>Login</button> */}
          </center>
          <center>
            <div className = 'side-info'>
              <h5>Forgotten password ?</h5>
            </div>
          </center>
        </form>
      </div>
    </div>
    </div>
  );
}
}

export default AdminLogin;
