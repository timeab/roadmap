import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card/card'
import Categories from './components/categories/categories';

class App extends React.Component {
  render() {
    return (
      <div>
        {
          <ul>
            <h1><Categories /></h1>
            <h2> <Card /></h2>
          </ul>
        }
      </div>
    );
  }
}

export default App;
