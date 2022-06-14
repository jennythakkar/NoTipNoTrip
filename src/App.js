import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Trip from './pages/Trip';
import Resource from './pages/Resource';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Calculator' component={Calculator} />
          <Route path='/Trip' component={Trip} />
          <Route path='/Resource' component={Resource} />
        </Switch>
      </Router>
    </>
  );
}

export default App;