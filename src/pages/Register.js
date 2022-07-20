import React, { useState } from 'react';
import '../assets/css/Register.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import Student from './Student';
import NavBar from './NavBar';

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  // let history = useHistory();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const { name, email, mobile, password } = state;

  const handleInputChange = (e) => {
    let { name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !mobile || !password) {
      setError("*Please fill all the input fields*");
    } else {
      dispatch(addUser(state));
      // history.push("/login"); 
      navigate('/login');
      // setError("");
    }
  };

  return (
    <div>
      <NavBar />
    <div className = 'register-student'>
      <div className = 'register-container'>
        <h3>Create Account</h3>
        {error && <h6 style = {{color: "red" }}>{error}</h6>}
        <form className = 'register-form' onSubmit = {handleSubmit}>
        <center>
            <label htmlFor = 'name'>Name<sup>*</sup></label><br />
            <input type = 'text' placeholder = 'Name-minimum 4 characters' name ='name' onChange = {handleInputChange}  />
          </center>
          <center>
            <label htmlFor = 'email'>Email<sup>*</sup></label><br />
            <input type = 'email' placeholder = 'Enter your email address' name ='email' onChange = {handleInputChange} />
          </center>
          <center>
            <label htmlFor = 'mobile'>Mobile Number<sup>*</sup></label><br />
            <input type = 'number' placeholder = 'MobileNo-should starts with 6 to 9 ' name ='mobile' onChange = {handleInputChange} />
          </center>
          <center>
            <label htmlFor = 'password'>Password<sup>*</sup></label><br />
            <input type = 'password' placeholder = 'Characters followed by special char' name ='password' onChange = {handleInputChange} />
          </center>
          <center>
            <button type = 'submit' className = 'register-register' onClick = {Student}>Register
            </button>
          </center>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register;