import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StickyFooter from 'react-sticky-footer';

function Footer() {
    return (
        <StickyFooter
            bottomThreshold={50}
            normalStyles={{
            height:"5rem",
            backgroundColor: "#708090",
            padding: "2rem"
            }}
            stickyStyles={{
            height:"5rem",
            backgroundColor: "#708090",
            padding: "2rem"
            }}
         >
           Memory-Game!
        </StickyFooter>
    
    );
  }
  

export default Footer;