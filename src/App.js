import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header clearfix">
      <Header></Header>
      </div>
      
      <div className='About clearfix'>
        <About></About>
      </div>
      <div className='work clearfix'>
        <Work></Work>
      </div>
      <div className='contact clearfix'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;