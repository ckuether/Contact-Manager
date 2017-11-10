import React, { Component } from 'react';
import TitleBar from './TitleBar';
import CatList from '../containers/CatList';
import CatForm from '../containers/CatForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <TitleBar />
        <CatList />
        <CatForm />
      </div>
    );
  }
}

export default App;
