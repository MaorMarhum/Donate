import React from 'react';
import { Navbar } from './components';
import { Home, Signup } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
