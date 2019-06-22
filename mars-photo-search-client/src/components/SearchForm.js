import React, { Component } from 'react';

class SearchForm extends Component {

  API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos'

  state = {
    sol: '',
    camera: ''
  }

  handleFormSubmit = event => {

    event.preventDefault();

    let { sol, camera } = this.state
    let params = { sol:sol, camera:camera }
    let url = new URL(this.API_URL)
    url.search = new URLSearchParams(params)

    fetch(url)
    .then(response => response.json())
    .then(photos => console.log(photos))
    .catch(error => console.log(error))
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
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
    )
  }
}

export default SearchForm;
