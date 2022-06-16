import React from "react";
import "./Contact.css";
import contact from "./contactUs.jpg";
// import Footer from "./Footer";

const NewContact = () => {
    return (
        <div className = "containers">
            <section className = "contact-section cnt">
            <h1 className = "heading">CONTACT US</h1>
            <img src = {contact} alt = "contactUs" className = "contact-image"></img>
            <form className = "forms">
                <h3>GET IN TOUCH</h3>
                <label>Name</label>
                <input type = "text" name = "name" />

                <label>Email</label>
                <input type = "email" name = "email" />

                <label>Message</label>
                <textarea name = "message" rows = "4" />
                {/* <input type = "submit" value = "Send" /> */}
                <button type = "submit">Send</button>
            </form>
            
            </section>
            
        </div>
    );
}

export default NewContact;