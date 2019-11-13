import React from 'react';
 

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import  Header from "./components/Header/Header"
import  Nav from "./components/Navbar/Nav"
import  BondsList from "./components/Bonds/BondsList"
import  InvestorsList  from "./components/Investors/InvestorsList"


function App() {
  return (
    <div className="App">
    <Header/>

      <Router>
              <>
               <Nav/>
             
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
