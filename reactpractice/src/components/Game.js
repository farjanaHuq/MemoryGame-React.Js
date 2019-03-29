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
        const shuffledImages = this.state.images;
        //this.shuffle(this.state.images);
        const index = shuffledImages.findIndex(elem => elem.id === id);
        const guessLimit = this.state.images.length - 1;
         
        console.log("Guess Limit", guessLimit);
        console.log("index", index);
        console.log("Image guessed", images[index].guessed);
        console.log("Shuffle Image", shuffledImages);
        

        if(!images[index].guessed){
               if(this.state.score === this.state.topScore) {
                   //user score increases after clicking an image for the first time
                  this.increaseScore(index, "Correct Guess");
               }
               else if(images[index].guessed === true){
                 //user score reset to 0 if an image is clicked twice
                 this.resetUserScore(index,  "Clicked Twice");
               }

            //    if( this.state.score === guessLimit){
            //        //reset the game after winning the game
            //       this.resetGame(index, "Congratulation! You Win!");
            //    }
            //    else{
            //       //reset the game after loosing the game
            //      this.resetGame(index, "Sorry! Try again!");
            //    }
        }
    };

    //function to shuffle images from image array
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
     };
     
     //function to increase the score and topScore
     increaseScore = (index, newMessage) => {
         
        images[index].guessed = true;
        this.setState({
               score: this.state.score+1,
               topScore: this.state.topScore+1,
               msgForPlayer: newMessage
           })   
     };
      
      //function to reset the score to 0
      resetUserScore = (newMessage) => {
        this.setState({
               score: 0,
               msgForPlayer: newMessage
           })   
     };
      
     //function to reset the game
     resetGame = (index, newMessage) => {
         
        images[index].guessed = false;
        this.setState({
               score: this.state.score,
               topScore: this.state.topScore,
               msgForPlayer: newMessage
           })   
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