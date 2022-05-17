import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import AboutSection from './components/AboutSection';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  const isBackgroundWhite = true;

  return (
    <>
    <Router> 
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} by element={<Home />}/>
        </Switch>
    </Router> 
    </>
  );
}

export default App;
