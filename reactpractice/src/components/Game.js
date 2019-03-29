import React, { Component } from "react";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import ImageContainer from "./Container/imageContainer";
import images from "./Container/images"
import Footer from "./Footer";


class Game extends Component{

    state = {
       score: 0,
       topScore: 0,
       images: images,
       msgForPlayer: " Click an image to begin!"
     };
    
    handleGuess = (e) => {
        e.preventDefault();
        console.log('The image was clicked.');
        


    };

    render(){
        return(
        <div>
            <Nav
                score= {this.state.score}
                topScore = {this.state.score}
                msgForPlayer = {this.state.msgForPlayer}

            />
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

export default Game;