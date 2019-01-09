import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from '../src/components/products/products';

class App extends React.Component {
  render() {
    return (
      <div>
        {
          <ul>
            <Products />
          </ul>
        }
      </div>
    );
  }
}

export default App;
