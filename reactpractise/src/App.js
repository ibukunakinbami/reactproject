import React from 'react';
import './App.css';
import Sensei from './component/Person';


function app() {
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

export default app;
