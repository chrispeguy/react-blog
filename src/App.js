import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/clean-blog.min.css";

import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Contact from "../src/Pages/Contacts/Contacts";
import Posts from "../src/Pages/Posts/SamplePost";

class App extends Component{
  render(){
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" 
            data-toggle="collapse" data-target="#navbarResponsive" 
            aria-controls="navbarResponsive" aria-expanded="false" 
            aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts">Sample Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul> 
            </div>
          </div>
        </nav>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Switch>
                <Route exact path="/"><Home/> </Route>
                <Route path="/about"><About/> </Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/posts"><Posts/> </Route>
              </Switch>
            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </Router>
    )
  }
};
  
export default App;

