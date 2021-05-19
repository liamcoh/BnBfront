import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import appStyles from './App.module.css';

function App() {
    return (
 <div className={appStyles.App}>
 <Header />
 <Body />
</div>
  );
}

export default App;
