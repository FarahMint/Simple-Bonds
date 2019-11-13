import React, {useContext} from 'react';
import SingleInvestor from "./SingleInvestor";
import Alert from "../Alert";

import PropTypes from "prop-types";

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

export default function InvestorsList() {
    const {state, alert} = useContext(InvestorContext);
    const {investors }= state

    return (
        <div className="investors-list">
          <ul>
          {alert.show &&  <Alert  status={alert.status} text={alert.text}/>}
          {investors&& investors.map(investor =>
          <SingleInvestor 
          key={investor.id}
          investor={investor}/> )}
          </ul>
      </div>   
    )
}

InvestorsList.propTypes = {
  investors: PropTypes.array,
  investor: PropTypes.object,
  alert: PropTypes.object,
};