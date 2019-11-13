import React ,  {useContext} from 'react';
import InvestorDropDown from "./InvestorDropDown";
 
import { GET_AMOUNT_INVESTED } from "../../store/actions";


import PropTypes from "prop-types";

 /**IMPORT CONTEXT */
import { InvestorContext } from "../../store";


export default function InvestorForm() {


    const {state, dispatch} = useContext(InvestorContext);
    const { amount }= state

    return (
        <form>
         <InvestorDropDown 
   
         />
        <div className="input-area"> 
            <label htmlFor="investment-amount">How much would you like to invest?</label>
            <div> 
            <span className="ccy-icon">&#8356;</span>
                <input 
            type="number"
            min="0"
            id="investment-amount"
            name="investment-amount"
            placeholder="10000"
            value={amount|| ""}
    
            onChange={(e) =>
                dispatch({
                  type: GET_AMOUNT_INVESTED,
                  payload: parseInt(e.target.value)
                })
              }
       
            />   
            </div>
            
        </div>
           
       
        </form>
    )
}

InvestorForm.propTypes = {
    amount: PropTypes.number,
  };