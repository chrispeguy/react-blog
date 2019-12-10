import React, { Component } from 'react';
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/clean-blog.min.css";

import Nav from "../src/Components/Nav/Nav";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

import Home from "../src/Pages/Home/Home";

class App extends Component{
  render(){
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              
              <Home/>

            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
};
  
export default App;
