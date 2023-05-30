import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './baseComponent/BaseComponent'

function App() {
  return (
   <div>
    <BaseComponent title='Arc' name='vinay' age={22}/>
    <p>hii</p>
   </div>
  );
}

export default App;
