import './App.css';
import Courses from './components/Courses';
import Headers from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// functional based component


function App() {
  return (
    <div className="App">
      <Headers />
      <Main />
      <Courses />
      <Footer />
    </div>
  );
}

// class based component

/*
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <Main />
      <Courses />
      <Footer />
      </div>
    )
  }
}
*/


 export default App;
