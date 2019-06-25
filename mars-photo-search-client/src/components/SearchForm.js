import React, { Component } from 'react';
import Photos from './Photos';
import './SearchForm.css';

class SearchForm extends Component {

  RAILS_API_URL = 'http://localhost:3000/api/photos'

  state = {
    sol: '',
    camera: '',
    photos: [],
    errors: {},
    message: ''
  }

  handleFormSubmit = event => {

    event.preventDefault();
    this.setState({
      errors: {},
      message: ''
    })

    let { sol, camera } = this.state
    let params = { sol:sol, camera:camera }
    let url = new URL(this.RAILS_API_URL)
    url.search = new URLSearchParams(params)

    fetch(url)
    .then(response => {
      if (!response.ok) {
        response.json()
        .then(errors => {
          this.setState({
            errors: errors,
          })
        })
      } else {
        response.json()
        .then(data => {
          this.setState({
            photos: data,

          })
          if (data.length === 0) {
            this.setState({
              message: 'No results! Try a different search.'
            })
          }
        })
      }
    })
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
            type='number'
            name='sol'
            onChange={this.handleInputChange}
            required
            min='0'
          />
        </div>
        <div className='Form-field'>
          <label>Camera</label>
          <select
            name='camera'
            onChange={this.handleInputChange}
            required
          >
            <option></option>
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera	</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
            <option value="NAVCAM">	Navigation Camera</option>
          </select>
        </div>
        <button type='submit'>Find Photos</button>
      </form>
      {this.state.errors.messages && this.state.errors.messages.map(message => <h3 style={{color:"red"}}>{message}</h3>)}
      <h3>{this.state.message}</h3>
      <Photos photos={this.state.photos} />
      </div>
    )
  }
}

export default SearchForm;
