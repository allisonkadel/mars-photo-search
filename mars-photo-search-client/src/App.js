import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Photos from './components/Photos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Curious About Mars?</h1>
        <h2>Search for photos taken by NASA's Curiosity Mars rover.</h2>
        <SearchForm />
        <Photos />
      </div>
    );
  }
}

export default App;
