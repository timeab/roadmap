import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card/cardList'
import Categories from './components/categories/categories';

class App extends React.Component {
  render() {
    return (
      <div>
        {
          <ul>
            <h1><Categories /></h1>
            <h2><CardList /></h2>
          </ul>
        }
      </div>
    );
  }
}

export default App;
