import React from 'react';
import './App.css';
import Sensei from './component/Person';


function app() {
  return (
    <div className="App">
      <h1>HI, I AM A REACT DEVELOPER</h1>
      <Sensei name="DEOLA"/>
      <Sensei name="KEJI"/>
      <Sensei name="SEGUN"/>
    </div>
  );
}

export default app;
