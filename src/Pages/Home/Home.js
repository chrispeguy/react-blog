import React, { Component } from "react";
import Post from "../../Components/Post/Post";
import axios from "axios";


class Home extends Component{

  constructor(props){
    super(props);
    this.state ={
      posts:[],
      selectedPostId: null
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post =>{
        return {
          ...post,
          author: "Peguy"
        }
      })
      this.setState({
        posts:updatedPosts
      })
    })
  }

  
  postSelectedHandler= (id) =>{
    this.setState({selectedPostId: id })
  }

  render() {
    
    return(
      <div>
        {
        this.state.posts.map(post => {
          return (
            <Post key={post.id} 
              title={post.title} 
              body={post.body}
              author={post.author} 
              clicked={() => this.postSelectedHandler(post.id) } />
          )
        })
        }
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    );
  }
};

 export default Home;