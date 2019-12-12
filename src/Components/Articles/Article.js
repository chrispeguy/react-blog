import React from "react";

const article = (props)=> {
  const { article } = props; // destructuration de article ds props 
  // (props ici represente la propriété "article" ds laquelle avait eté passé "LoadedPost"
  return(
    <article>
        <div className="container">
          <div className="row"> 
            <div className="col-lg-8 col-md-10 mx-auto">
              <h3> {article.title} </h3>    
              <p> {article.body} </p>      
              <p>Placeholder text by
                <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                <a href="https://www.flickr.com/photos/nasacommons/">{article.author } </a>. // represente la valeur "author" ds "LoadedPost"
              </p>
            </div>
          </div>
        </div>
    </article>
  )
};
export default article;