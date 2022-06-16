import React, { Component } from 'react';
import './App.css';
import Sensei from './component/Person';

//FUNCTION BASED COMPONENT
/*
function App() {
  return (
    <div className="App">
      <h1>HI, I AM A REACT DEVELOPER</h1>
      <Sensei name="DEOLA" age="22" />
      <Sensei name="KEJI" age="30"/>
      <Sensei name="SEGUN" age="47"/>

      <button>SWITCH</button>
    </div>
  );
}
*/

//CLASS BASED COMPONENT
class App extends Component() {
  
  state = {
    precord:[
      {name: "SEGUN", age: 45},
      {name: "DEOLA", age: 78},
      {name: "  KEJI", age: 34}
    ]
  }

  render(){
  return (
    <div className="App">
      <h1>HI, I AM A REACT DEVELOPER</h1>
      <Sensei name = {this.state.precord[0].name} age={this.state.precord[0].age} />
      <Sensei name = {this.state.precord[1].name} age={this.state.precord[1].age} />
      <Sensei name = {this.state.precord[2].name} age={this.state.precord[2].age} />

      <button>SWITCH</button>
    </div>
  );
  }
}

export default App;
