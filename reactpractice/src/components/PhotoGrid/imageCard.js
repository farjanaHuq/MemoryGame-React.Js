import React, { Component } from 'react';

class ImageCard extends Component {

   render() {
      return (
         <div>
            <img
               src={this.props.image}
               alt="emo-image"
               class="image-card"
               id={this.props.id}
               width="200" height="200"
               onClick={this.props.handleGuess}
            />
         </div>
      );
   }
}

export default ImageCard;