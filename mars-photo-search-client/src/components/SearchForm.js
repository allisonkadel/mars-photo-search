import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Sol</label>
          <input
            type='text'
            name='sol'
          />
        </div>
        <div>
          <label>Camera</label>
          <input
            type='text'
            name='camera'
          />
        </div>
        <button type='submit'>Search for Photos</button>
      </form>
    )
  }
}

export default SearchForm;
