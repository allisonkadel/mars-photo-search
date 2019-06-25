import React, { Component } from 'react';
import Photos from './Photos';

class SearchForm extends Component {

  RAILS_API_URL = 'http://localhost:3000/api/photos'
  // API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos'

  state = {
    sol: '',
    camera: '',
    photos: []
  }

  handleFormSubmit = event => {

    event.preventDefault();

    let { sol, camera } = this.state
    let params = { sol:sol, camera:camera }
    let url = new URL(this.RAILS_API_URL)
    url.search = new URLSearchParams(params)

    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        photos: data
      })
    })
    .catch(error => console.log(error))

  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Sol</label>
          <input
            type='text'
            name='sol'
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Camera</label>
          <input
            type='text'
            name='camera'
            onChange={this.handleInputChange}
          />
        </div>
        <button type='submit'>Find Photos</button>
      </form>
      <Photos photos={this.state.photos}/>
      </>
    )
  }
}

export default SearchForm;
