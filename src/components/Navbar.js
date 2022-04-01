import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/foodlogo2.png';
import './Navbar.css';
const Navbar = () =>{
   const [toggle, setToggle] = useState(false);

    return (
       <>
         <div className="nav">
            <div className="headwrapper">
            <img src={logo} className="foodlogo" />
            <h2>Food Diversity</h2>
            </div>
           <div className={`content ${toggle && 'open'}`}>
              <Link to="/"> Home </Link> 
              <Link to="/menu"> Menu </Link> 
              <Link to="/about"> About </Link> 
              <Link to="/contact"> Contact </Link> 
           </div>
           <div className={`nav-toggle ${toggle && "open"}`} onClick={()=>{setToggle(!toggle)}}>
              <div className="bar"></div>
           </div>
           
         </div>
       </>
    )
}
export default Navbar;