import React from "react";
import background from "../../assets/img/home-bg.jpg";

const header = () => {
    return(
        <header className="masthead" style={{backgroundImage: `url(${background})`}}>
        <div className="overlay"/>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Chris's Blog </h1>
                  <span className="subheading">the template ...</span>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
};
  export default header;