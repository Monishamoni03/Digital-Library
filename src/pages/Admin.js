import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AddBooks from './AddBooks';
import AdminNavBar from './AdminNavBar';
// import Footer from './Footer';

class Admin extends Component {
  render() {
  return (
    <div>
        <AdminNavBar />
        <h1>Welcome Admin!</h1>
        {/* <AddBooks /> */}
        <Link to = "/adminbooks">
            <button type = 'submit' className = 'login-login'>Add Books</button>
        </Link>
        {/* <Footer /> */}
    </div>
  )
  }
}

export default Admin;