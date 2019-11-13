import React  from 'react';

import PropTypes from "prop-types";



const InvestorPortfolio = ({ id, name, amount, investor_id, type,interest,  status, created_at,func , toggle
}) => {
    /** check investment type */
    const interestType = type === "maturity" ? "maturity" : "quarterly" ;

    return (
     
        <div  className={toggle ? 'hidden' : 'shown'}>
            <p>name: {name}</p>
            <p>amount: {amount}</p>
            <p>type:{type}</p>
           
            <p>  {interestType} interest: {(interest * 100).toFixed(2)}% </p>
            <p>investment status: {status}</p>
            <p>created at: {created_at}</p>
            <button
            className={status === "cancelled" ? 'hidden' : 'shown'}
            onClick={()=>func(investor_id ,id)}
            > remove
            </button>  
        </div>
    );
  };


  InvestorPortfolio.propTypes = {
    id : PropTypes.number,
     name: PropTypes.string, 
     amount : PropTypes.number, 
     investor_id: PropTypes.number, 
     type : PropTypes.string,
     interest:  PropTypes.number,  
     status:  PropTypes.string,
     created_at: PropTypes.string,
     func: PropTypes.func, 
    toggle: PropTypes.bool,
     
  };


  export default InvestorPortfolio ;