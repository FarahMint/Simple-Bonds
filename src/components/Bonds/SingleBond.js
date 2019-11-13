import React  from 'react';
import DisplayChild from "./DisplayChild";

export default function SingleBond({bond}) {
    return (
        <li>
            <h2>{bond.name}</h2>
            <p>duration: {bond.duration_months} months</p>
            
            <div className="bond-content">

            <DisplayChild 
             id={bond.id}
            interest={bond.maturity_interest} 
            duration= {bond.duration_months}
            txt_interest="interest paid" 
            investmentType ="maturity"
            info="expected gross return" 
 
            />
            <DisplayChild
            id={bond.id}
            interest={bond.quarterly_interest}
            duration= {bond.duration_months}
            txt_interest="interest paid" 
            investmentType="quarterly"
            info="expected gross return"
            />
            </div>
        </li>
    )
}
