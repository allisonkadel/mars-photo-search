import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    sol: '',
    camera: ''
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submitted query")
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
        <button type='submit'>Search for Photos</button>
      </form>
    )
  }
}

export default SearchForm;
