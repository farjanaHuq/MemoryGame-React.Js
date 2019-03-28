import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import  Container from "./components/Container";
import Footer from "./components/Footer";
import ImageContainer from "./components/PhotoGrid/imageContainer";
import images from "./components/PhotoGrid/images.json";


class App extends Component{

    state = {
       images: images
     };

    render(){
        return(
        <div>
         
            <Nav/>
            <Jumbotron/> 
         
            <Container />  
               
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