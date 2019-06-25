import React, { Component } from 'react';
import Photo from './Photo';

class Photos extends Component {

  renderPhotos = (photos) => {
    return photos.map(photo => <Photo key={photo.id} img={photo.img_src} />)
  }

  render() {
    return (
      <div>
        <h1>photos component</h1>
        {this.renderPhotos(this.props.photos)}
      </div>
    )
  }
}

export default Photos;
