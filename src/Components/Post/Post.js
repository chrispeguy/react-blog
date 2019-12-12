import React from "react";
import { Link } from "react-router-dom";

const post = (props)=> { 
  const { post } = props; // destructuration de "post" ds "props" (props represente les propriétés des données reçus par post ds la page "Home" )
    return(
     <div>
        <div className="post-preview">
          <Link to={`/post/${post.id}`}> 
            <h2 className="post-title">
              {post.title}
            </h2>
            <h3 className="post-subtitle">
              {post.body}
            </h3>
          </Link>
          <p className="post-meta">Posted by
            <Link to={`/post/${post.id}`}> {post.author} </Link>
            on December 11, 2019</p>
        </div>
        <hr/>
     </div>
    )   
};
export default post;