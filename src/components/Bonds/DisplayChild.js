import React, { useContext} from 'react';
import {formula} from "../../formula";

 

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

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
            id,
            investmentType, 
            amount 
        }
        postData(investorSelected,  data);
  };

   
    return (
        <form onSubmit={handleSubmit} >
            <p>{(interest * 100).toFixed(2)}% <span>P.A</span> </p>
            <small>{txt_interest}</small> 
            <p>{investmentType }</p>
            <small>{info}</small>
            <p> £{Math.round(expectedReturn)}</p>
             <button 
             type="submit"> invest</button>    
        </form>
    );
  };

  export default DisplayChild ;