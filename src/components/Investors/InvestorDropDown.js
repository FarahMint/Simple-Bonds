import React, {useContext} 
from 'react';

import { GET_SINGLE_INVESTOR } from "../../store/actions";

 /**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

export default function InvestorsDropDown() {
    
    const {state, dispatch }=useContext(InvestorContext);

    const {investorSelected , investors} = state

    const invList =
    investors && investors.map(investor =>{
            const { first_name, last_name, id}= investor;
            const fullName = `${first_name} ${last_name}`;
            return (
             <option key={id}
                    value={investor.id}>
                    {fullName}
            </option>)   
        })
 


    return (
        <>
            <label> I am investing as :
            <select
            name="investors-dropdown" id="investors-dropdown"
            value={investorSelected}
     
            onChange ={(e)=> dispatch({
                type:GET_SINGLE_INVESTOR , 
                payload: e.target.value})} >
           

                <option value="select">select investor</option>
                {invList}
            </select>
            </label>  
        </>
    )
}
