import React, { useContext} from 'react';

import SingleBond from "./SingleBond";
import InvestorForm from "../Investors/InvestorForm";
import Alert from "../Alert";

import PropTypes from "prop-types";

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

 
 export default function BondsList() {

  const {state, alert} = useContext(InvestorContext);
  const {bondsList}= state;

    return (
      
      <section className="bonds-container">

      <InvestorForm />
      <div className="bond-list">
      <ul className="list">
    {alert.show &&  <Alert  status={alert.status} text={alert.text}/>}
        { bondsList &&  bondsList.map(bond =>
                   <SingleBond key={bond.id} bond={bond}/>)}
        </ul>
      </div>
    </section>
             
      
    )
}
BondsList.propTypes = {
  bondsList: PropTypes.array,
  bond: PropTypes.object,
  alert: PropTypes.object,
};