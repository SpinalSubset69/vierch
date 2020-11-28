import React, { Component } from "react";

//APIS
import youtube from "../api/youtube";

//Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit("lol adc");
  }

  onTermSubmit = async (term) => {
    //Como es una peticion tiene que ser asyncrona
    console.log("Información enviada del componente hijo: " + term); //Nos asguramos de recibir la informacion del componente hijo
    //Hacemos el request a la api de youtube enviando como primer parametro la mascara de busqueda(peticion que se encuentra en la documentacion)
    //Y como segundo parametro el query de lo que buscaremos
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ 
      videos: response.data.items ,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
