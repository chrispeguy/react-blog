import React, {Component} from "react";
import Article from "../../Components/Articles/Article";
import axios from "axios";

class SamplePost extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadedPost: null,
      error: null // 
    } 
  }
   
  componentDidMount(){
    const { match } = this.props; // ici on fait une destructuration du "match" ds "this.props" , 
    if(match.params.id) { //condition sr le parametre id selectionné
      axios.get("https://jsonplaceholder.typicode.com/posts/" +match.params.id) //lien  de la requete + l'id selectionné
        .then(response => {
          this.setState({loadedPost: response.data})
        }).catch(error => { // en cas d'erreur de la requete
          this.setState({error: "Mauvaise requete"})
      })
    }
  }

  render() {
    const {loadedPost} = this.state; // destructuration du "LoadedPost" ds "this.props"
    if(loadedPost ) {
      return (
        //le contenu de loadPost (qui est le resultat de la requete) ds Article(juste un nom)
        // ce st les "id" "title" "body" ... (pr eviter de ts les citer 1 by 1)
        <Article 
          key={ loadedPost.id } // key des données
          article={ loadedPost } /> // 
      )
    }

    if(loadedPost === null) {
      return <h1>Loading.....</h1>
    }
  }
};
    
export default SamplePost;