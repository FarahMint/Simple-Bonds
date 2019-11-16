import React, { useContext} from 'react';
import {formula} from "../../formula";

 

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

/** For each single bond display maturity and quarterly options */

const DisplayChild = ({
  id, 
  interest,
  investmentType , 
  info,
  txt_interest,
  duration}) => {


    const { state, postData }=useContext(InvestorContext);

    const {  investorSelected, amount} = state; 
    const expectedReturn = 
    amount === undefined ? 0 : formula(amount, interest, duration);

    const handleSubmit = evt => {
    evt.preventDefault()
   
        let data = {
          bond_id: id,
          type:investmentType, 
          amount: amount 
        }
        postData(investorSelected,  data);
  };

   
    return (
        <form onSubmit={handleSubmit} >
            <p>{(interest * 100).toFixed(2)}% <span>P.A</span> </p>
            <p> <small>{txt_interest}</small> <strong>on {investmentType }</strong></p> 
          
            <small>{info}</small>
            <p className="expected-return"> £{Math.round(expectedReturn)}</p>
             <button 
             type="submit"> invest</button>    
        </form>
    );
  };

  export default DisplayChild ;