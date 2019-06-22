import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    sol: '',
    camera: ''
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
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
