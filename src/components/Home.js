import React from 'react';
import backimage from '../images/finalback.jpg';
import './home.css';
import { Link } from 'react-router-dom';
const Home = () =>{

    return(
     <>
      <div className='home' style={{backgroundImage:`url(${backimage})`}}>
          <div className='maincontainer'>
            <h1>Food Diversity</h1>
            <p>INDIAN FOOD AT CLICK.</p>     
            <button className='mainbutton'>
                <Link to="/menu">Order Now</Link>
            </button>
          </div>

      </div>
     </>
    )
}
export default Home;
