import React from 'react';
import { Header, How } from './containers'
import { Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <How />
      </div>
    </div>
  );
}

export default App;
