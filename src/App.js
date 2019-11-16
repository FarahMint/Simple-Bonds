import React from 'react';
 

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import  Header from "./components/Header/Header"
import  Nav from "./components/Navbar/Nav"
import  BondsList from "./components/Bonds/BondsList"
import  InvestorsList  from "./components/Investors/InvestorsList"
import  InvestorDetails  from "./components/Investors/InvestorDetails"


function App() {
  return (
    <div className="App">
    <Header/>

      <Router>
              <>
               <Nav/>
             
                <Switch>
                  <Route exact path='/' component={BondsList} />
                  <Route exact path='/investors' component={InvestorsList} />
                  <Route exact path='/investors/:id' component={InvestorDetails} />
                </Switch>
              </>
            </Router>
    </div>
  );
}

export default App;
