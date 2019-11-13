import React, {useContext} from 'react';
import SingleInvestor from "./SingleInvestor";
import Alert from "../Alert";
import Search from "./Search";

import PropTypes from "prop-types";

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";
 

export default function InvestorsList() {
    const {state , alert} = useContext(InvestorContext);
    const {investors, query }= state

    const searchInvestors =  !query
      ? investors
      : investors.filter(person =>
           person.first_name.toLowerCase().includes(query.toLowerCase())
           ||
            person.last_name.toLowerCase().includes(query.toLowerCase())
        );

    return (
      <>
      <Search 
      investors ={investors }/>
 
        <div className="investors-list">
          <ul>
          {alert.show &&  <Alert  status={alert.status} text={alert.text}/>}

          { searchInvestors&& searchInvestors.length ===0 &&
          <h2>Sorry no investor match your query</h2>}

          {searchInvestors&& searchInvestors.map(investor =>
          <SingleInvestor 
          key={investor.id}
          investor={investor}/> 
          )}
          </ul>
      </div> 
      </>  
    )
}

InvestorsList.propTypes = {
  investors: PropTypes.array,
  searchInvestors: PropTypes.array,
  investor: PropTypes.object,
  alert: PropTypes.object,
};