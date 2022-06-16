import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function Student() {

  return (
    <div className = 'login'>
      <div className = 'login-container'>
        <h3>Log in to digital library</h3>
        <form className = 'login-form '>
          <center>
            <input type = 'email' placeholder = 'Email address'  />
          </center>
          <center>
            <input type = 'password' placeholder = 'Password' />
          </center>
          <center>
            <button type = 'submit' className = 'login-login'>Login</button>
          </center>
          <center>
            <div className = 'side-info'>
              <h5>Forgotten password ?</h5>
              <Link to = '/register' style = {{textDecoration: 'none'}}>
                <h5 className = 'rtd'>Sign-up</h5>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  )
}

export default Student;