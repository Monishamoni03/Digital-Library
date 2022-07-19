import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';

function Student() {
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


    {/* <div className = 'register-student'>
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
    </div> */}
    </div> 
  )
}

export default Student;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Login.css'; 
// import NavBar from './NavBar';

// class Student extends Component {
//   render() {
 
//   return (
//   <div>
//       <NavBar />
//     <div className = 'login-student'>
//       <div className = 'login-container'>
//         <h3>Log in to digital library</h3>
//         <form className = 'login-form '>
//           <center>
//             <input type = 'email' placeholder = 'Email address'  />
//           </center>
//           <center>
//             <input type = 'password' placeholder = 'Password' />
//           </center>
//           <center>
//             <button type = 'submit' className = 'login-login' >Login</button>
//           </center>
//           <center>
//             <div className = 'side-info'>
//               <h5>Forgotten password ?</h5>
//               <Link to = '/register' style = {{textDecoration: 'none'}}>
//                 <h5 className = 'rtd'>Don't have an account? Sign-up</h5>
//               </Link>
//             </div>
//           </center>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
//   }
// }

// export default Student;