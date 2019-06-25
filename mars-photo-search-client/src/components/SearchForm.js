import React, { Component } from 'react';
import Photos from './Photos';
import './SearchForm.css';

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
      <div className='Search-form'>
      <h3 className='Form-header'>Search for photos taken by NASA's Curiosity Mars rover.</h3>
      <form onSubmit={this.handleFormSubmit}>
        <div className='Form-field'>
          <label>Sol</label>
          <input
            type='text'
            name='sol'
            onChange={this.handleInputChange}
          />
        </div>
        <div className='Form-field'>
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
      </div>
    )
  }
}

export default SearchForm;
