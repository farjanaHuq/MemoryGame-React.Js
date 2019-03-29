import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

import Footer from "./components/Footer";
import ImageContainer from "./components/Container/imageContainer";
import images from "./components/Container/images"


class App extends Component{

    state = {
       images: images
     };
    
    handleGuess = (e) =>{
        e.preventDefault();
        console.log('The link was clicked.');
    };

    render(){
        return(
        <div>
            <Nav/>
            <Jumbotron/> 
            <ImageContainer
                images={this.state.images}
                handleGuess={this.handleGuess}
            />
            
           
             
          
            <Footer/>       
                
        </div>   
            
             
        )
    }
}

export default App;