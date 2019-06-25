import React, { Component } from 'react';
import Photo from './Photo';

class Photos extends Component {

  renderPhotos = (photos) => {
    return photos.map(photo => <Photo key={photo.id} img={photo.img_src} sol={photo.sol} camera={photo.camera} />)
  }

  render() {
    return (
      <div>
        {this.renderPhotos(this.props.photos)}
      </div>
    )
  }
}

export default Photos;
