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
        //const images = Object.assign(this.state.images);
        const index = images.findIndex(elem => elem.id === id);
        const guessLimit = this.state.images.length - 1;
        var   userScore = this.state.topScore;
         
        console.log('user score', userScore);
        console.log("Guess Limit", guessLimit);
        console.log("index", index + "id", id);
        console.log("Image guessed", images[index].guessed);
        //console.log("Shuffle Image", shuffledImages);
        
        if(!images[index].guessed){
            if(this.state.topScore === this.state.score){
                this.updateScore(images, index, this.state.topScore+1, "Correct Guess");
            }      
            else{
                this.updateScore(images, index, this.state.topScore, "Correct Guess");
            }
        }
        else{
            this.resetUserScore(images, index, userScore, "Clicked Twice");
        }


         // if correct guess
            // if (!images[index].guessed) {
            //     if (this.state.topScore === this.state.score) {
            //     // new high score reached
            //     this.updateScore(images, index, this.state.topScore + 1, 'Correct guess!');
            //     } else {
            //     // no new high score reached
            //     this.updateScore(images, index, this.state.topScore, 'Correct guess!');
            //     }
            //     // also check win condition(if they guess all correctly)
            //     if (this.state.score === images.length - 1) {
            //     this.resetGame(images, 'Congratulation!! You Won!');
            //     }
            //     // if incorrect guess
            // } else {
            //     this.resetGame(images, 'Clicked Twice!');
            // }
               
    };
        
     //function to increase the score and topScore
     updateScore = (images, index, newTopScore, newMessage) => {    
        images[index].guessed = true;
        this.setState({
               images:images,
               score: this.state.score+1,
               topScore: newTopScore,
               msgForPlayer: newMessage
           })   
          
     };
      
     //function to reset the score to 0
     resetUserScore = (images, index, userScore, newMessage) => {
        images[index].guessed = true;

        this.setState({
               score: 0,
               topScore: userScore,
               msgForPlayer: newMessage
           })   
     };
      
    //function to reset the game
    resetGame = (images, newMessage) => {
        console.log("reset score", this.state.score);
        images.forEach(elem => {
            elem.guessed = false;
         });
        this.setState({
               score: 0,
               topScore: this.state.topScore,
               msgForPlayer: newMessage
           })   
    };  

    render(){
        return(
        <div>
            <Nav
                score= {this.state.score}
                topScore = {this.state.topScore}
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