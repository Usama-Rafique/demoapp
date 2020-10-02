import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dineer.js';

function App() {
  return (
    <div className="App">
      {/*<Dinner></Dinner>*/}
   <Dinner dishname="chicken karahhi" sweetdish="kheer"/>
   <Dinner dishname="chicken " sweetdish="jalebi"/>
   <Dinner dishname="nihari" sweetdish="gajar ka halwa"/>
   </div>
  );
}

export default App;
