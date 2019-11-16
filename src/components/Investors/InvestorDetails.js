import React  , {useContext, useState} from 'react';


import InvestorPortfolio from "./InvestorPortfolio";
 

/**IMPORT CONTEXT */
 import { InvestorContext } from "../../store";

const InvestorDetails=() => {
   
  const [toggle, setToggle]= useState(false);
   const {  state,  cancelInvestment}=useContext(InvestorContext);
   const { singleInvestor,  investorPortfolio} =  state; 

  const btnStatusdisplay =(id)=>{

        let status = investorPortfolio && investorPortfolio.find(i => i.investor_id === id);

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
        <>
    <section className="single-inv-details">
        <div>
        <h2>{ singleInvestor.first_name} { singleInvestor.last_name}</h2> 
         { !investorPortfolio && <p>no investment</p>}

            {btnStatusdisplay(singleInvestor.id )} 
        </div>
      
             
            <div className="grid-single-investor">
            {   investorPortfolio.length > 0 && investorPortfolio.map(i =>
                <InvestorPortfolio 
                toggle={toggle}
                key={i.id}
                name= {i.bond.name}
                amount= {i.amount}
                type={i.type}
                interest={ i.type==="maturity" ? i.bond.maturity_interest : i.bond.quarterly_interest}
                status= {i.status}
                created_at={i.created_at}
                func={cancelInvestment}/>
                ) }
                </div>
    </section>
         
    
        </>
    )
}





export default  InvestorDetails;