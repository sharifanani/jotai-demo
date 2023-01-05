import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParentLogin } from './components/login/parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentLogin/>
      </header>
    </div>
  );
}

export default App;
