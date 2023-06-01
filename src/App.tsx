import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './baseComponent/BaseComponent'
import UserManagment from './UserManagment/UserManagment';


function App() {
  return (
   <div>
    {/* <BaseComponent title='Arc' name='vinay' age={22}/> */}
    <UserManagment isLogin={false} />
    
   </div>
  );
}

export default App;
