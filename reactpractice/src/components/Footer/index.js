import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StickyFooter from 'react-sticky-footer';
import "./style.css"

function Footer() {
    return (
      <div class='footer'>
        <StickyFooter
            bottomThreshold={50}
            normalStyles={{
            height:"3rem",
            backgroundColor: "#708090",
            padding: "1rem",
           
            }}
            stickyStyles={{
            height:"5rem",
            backgroundColor: "#708090",
            padding: "2rem"
            }}
         >
           Memory-Game! ©Farjana Huq 2019
        </StickyFooter>
        </div>
    );
  }
  

export default Footer;