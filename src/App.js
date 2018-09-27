import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Test from './test.js'

import DataProvider from './Provider.js'



class App extends Component {
  aaa=()=> {

  }
  render() {
    return (
      <DataProvider init={{background: 'green', color: 'black'}}>
        <Header aaa={this.aaa}/>
        <Test />
      </DataProvider>
    );
  }
}

export default App;
