import React from 'react';
 

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import  BondsList from "./components/Bonds/BondsList"
import  InvestorsList  from "./components/Investors/InvestorsList"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Simple Bonds
        </a>
      </header>

      <Router>
              <>
                <nav>
                <ul>
                  <li><Link to={'/'} className="nav-link"> Bonds </Link></li>
                  <li><Link to={'/investors'} className="nav-link">investors</Link></li>
                </ul>
                </nav>
                <hr />
             
                <Switch>
                  <Route exact path='/' component={BondsList} />
                  <Route path='/investors' component={InvestorsList} />
                </Switch>
              </>
            </Router>
    </div>
  );
}

export default App;
