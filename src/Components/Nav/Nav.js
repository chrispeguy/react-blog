import React from "react";
import { Link} from "react-router-dom";
//imput {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const nav = () => {
    return(
      
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
    )
};

export default nav;