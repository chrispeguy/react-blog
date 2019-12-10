import React from "react";
import Post from "../../Components/Post/Post";

const home = () => {
    return(
        
      <div>
            <Post/>
            <div className="clearfix">
                 <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
    
      </div>

        
    )
}; 
 export default home;