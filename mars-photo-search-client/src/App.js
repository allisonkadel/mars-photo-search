import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Curious About Mars?</h1>
        <SearchForm />
      </div>
    );
  }
}

export default App;
