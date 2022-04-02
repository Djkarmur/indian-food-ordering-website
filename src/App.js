import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from "./pages/Contact";
import './App.css';

const App = () =>{
  return(
    
      <Router >
          <Navbar />
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/Menu" exact element={<Menu/>} />
              <Route path="/About" exact element={<About/>} />
              <Route path="/Contact" exact element={<Contact/>} />
          </Routes>
          <Footer/>
      </Router>
    
  )
}
 export default App;