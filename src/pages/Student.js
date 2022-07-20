import React, { Component, useState } from 'react';
import '../assets/css/Login.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';

class Student extends Component {
  render() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // let history = useHistory();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const { email, password } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      setError("*Please fill all the input fields*");
    } else {
      dispatch(addUser(state));
      // history.push("/login"); 
      navigate('/welcome');
      // setError("");
    }
  };

  return (
    <div>
      <NavBar />
      <div className = 'login-student'>
      <div className = 'login-container'>
        <h3>Log in to digital library</h3>
        {error && <h6 style = {{color: "red" }}>{error}</h6>}
        <form className = 'login-form' onSubmit = {handleSubmit}>
          <center>
            <label htmlFor = 'email'>Email<sup>*</sup></label><br />
            <input type = 'email' placeholder = 'Enter your email address' name ='email' onChange = {handleInputChange} />
          </center>
          <center>
            <label htmlFor = 'password'>Password<sup>*</sup></label><br />
            <input type = 'password' placeholder = 'Characters followed by special char' name ='password' onChange = {handleInputChange} />
          </center>
          <center>
            <button type = 'submit' className = 'login-login' onClick = {WelcomePage}>Login</button>
          </center>
        </form>
      </div>
     </div>
    </div> 
  );
 }
}

export default Student;
