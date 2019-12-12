import React, { Component } from "react";
import Post from "../../Components/Post/Post";
import axios from "axios";
import {Link} from "react-router-dom";


class Home extends Component{

  constructor(props){
    super(props);
    this.state ={
      posts:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
     // const posts = response.data
      const posts = response.data.slice(0, 4);  // slice pr selectionner les reponses de la requete de l'id 0 et pr 4 données
      const updatedPosts = posts.map(post =>{ 
        return {
          ...post,    // spread sur le "post"
          author: "Peguy" // on y ajoute la propriété "author"
        }
      })
      this.setState({
        posts:updatedPosts
      })
    })
  
  }
      // 
  // postSelectedHandler= (id) =>{
  //   this.setState({selectedPostId: id });
  // }

  render() {
    const { posts } = this.state; // destructuration d "posts" dans "this.state"
    return(
      <div>
        {
          posts.map(post => {
            return (
              <Post 
                key={post.id} 
                post={post}    // le nom "post" represente l'ensemble des propriétés des données reçu par {post} lors de la requete
              />
            )
          })
        }
        <div className="clearfix">
          <Link className="btn btn-primary float-right" to="/">Older Posts &rarr;</Link>
        </div>
      </div>
    );
  }
};

export default Home;