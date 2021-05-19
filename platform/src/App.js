//import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import appStyles from './App.module.css';
//const { host_name } = require("./config");

function App() {

  //states

  

  return (
    <div className={appStyles.App}>
    <Header />
    <Body />
  </div>
  );
}

export default App;
