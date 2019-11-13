import React  , {useContext, useState} from 'react';
import InvestorPortfolio from "./InvestorPortfolio";
 

/**IMPORT CONTEXT */
 import { InvestorContext } from "../../store";

const SingleInvestor=({investor}) => {
   
   const [toggle, setToggle]= useState(false);
   const {  state,  cancelInvestment}=useContext(InvestorContext);
   const {portfolio} =  state; 

    const btnStatusdisplay =(id)=>{

        let status = portfolio && portfolio.find(i => i.investor_id === id);

        return status === undefined ? 
            <button disabled >no investment</button>
            : 
            <button 
            className="btn-actif"
            onClick={()=>setToggle(!toggle)}>
            {toggle ? ` view investment` : `hide investment`} 
            </button>
    }

    return (
        <li key={investor.id}>
       <h2>{investor.first_name} {investor.last_name}</h2> 
            {btnStatusdisplay(investor.id )}
     

       { portfolio &&  portfolio.map(i => (
          
            i.investor_id === investor.id &&
                <InvestorPortfolio 
                    toggle={toggle}
                    key={i.id}
                    id={i.id}
                    investor_id={i.investor_id}
                    name= {i.bond.name}
                    amount= {i.amount}
                    type={i.type}
                    interest={ i.type==="maturity" ? i.bond.maturity_interest : i.bond.quarterly_interest}
                    status= {i.status}
                    created_at={i.created_at}
                    func={cancelInvestment}/> 
                ))}       
        </li>
    )
}





export default  SingleInvestor;