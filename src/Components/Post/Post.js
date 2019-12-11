import React from "react";

const post = (props)=> {
    return(
     <div onClick={props.clicked} >
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">
              {props.title}
            </h2>
            <h3 class="post-subtitle">
              {props.body}
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#"> {props.author} </a>
            on December 11, 2019</p>
        </div>
        <hr/>
     </div>
    )   
};
export default post;