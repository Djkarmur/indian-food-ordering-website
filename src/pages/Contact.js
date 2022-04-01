import React from "react";
import './contact.css';
import contactimage from '../images/contactback3.avif'
const Contact = () =>{
    return(
        <>
        <div className="maincontact">
        <div className="leftside" style={{backgroundImage:`url(${contactimage})`}}>
            
        </div>
        <div className="rightside">
            <h1>Contact Us</h1>
            <form className="formcontent">
                <input type="text" name="names" placeholder="Enter Your Name" />
                <input type="email" name="names" placeholder="Enter Your Email" />
                <textarea name="message" placeholder="Enter Your Message" />
                <button type="submit" id="formbutton">Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Contact;