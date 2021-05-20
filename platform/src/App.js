import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import appStyles from './App.module.css';

function App() {

  const filters = [
    { value: 'גישה לנכים', label: 'גישה לנכים' },
    { value: 'בעלי חיים', label: 'בעלי חיים' },
    { value: 'מקלט', label: 'מקלט' },
    { value: 'כשרות', label: 'כשרות' }
  ]

  return (
    <div className={appStyles.App}>
    <Header />
    <Body filters ={filters} />
  </div>
  );
}

export default App;
