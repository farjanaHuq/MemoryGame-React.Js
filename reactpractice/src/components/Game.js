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

        const id = Number(e.target.id);
        const index = images.findIndex(elem => elem.id === id);
        const shuffleImage = this.shuffle(this.state.images);
         
        console.log("index", index);
        console.log("Image guessed", images[index].guessed);
        console.log("Shuffle Image", shuffleImage);

        if(!images[index].guessed){
               if(this.state.score === this.state.topScore) {
                      this.updateScore(index, this.state.score+1, images, "Correct Guess");
               }
               else {
                this.updateScore(index, this.state.score, images, "Clicked twice");
               }
        }
        


    };

    updateScore = (index, score, images, msgForPlayer) => {
         
         images[index].guessed = true;
         this.setState({
                score: score,
                topScore: score+1,
                images: this.state.images,
                msgForPlayer: msgForPlayer
            })   
    };
    
    shuffle = array => {
        let counter = array.length;
        // While there are elements in the array
        while (counter > 0) {
           // Pick a random index
           let index = Math.floor(Math.random() * counter);
           // Decrease counter by 1
           counter--;
           // And swap the last element with it
           let temp = array[counter];
           array[counter] = array[index];
           array[index] = temp;
        }
        return array;
     }

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