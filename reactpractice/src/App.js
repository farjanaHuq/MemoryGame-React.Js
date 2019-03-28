import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import  Container from "./components/Container";
import Footer from "./components/Footer";


class App extends Component{
    render(){
        return(
        <div>
          <div>
            <Nav/>
            <Jumbotron/> 
          </div>  
          <div>
            <Container/>  
           
          
            <Footer/>       
         </div>            
        </div>   
            
             
        )
    }
}

export default App;