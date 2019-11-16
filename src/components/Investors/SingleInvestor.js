import React  , {useContext} from 'react';

import { Link} from 'react-router-dom';
import { GET_SINGLE_INVESTOR_DETAILS } from "../../store/actions";


/**IMPORT CONTEXT */
 import { InvestorContext } from "../../store";

const SingleInvestor=({investor}) => {
   const {  dispatch }=useContext(InvestorContext);
 
    return (
        <li key={investor.id}>
            <h2>{investor.first_name} {investor.last_name}</h2> 
            <Link 
            to={`/investors/${investor.id}`}
            onClick ={(e)=> dispatch({
                type:GET_SINGLE_INVESTOR_DETAILS  , 
                payload: investor.id})}>view
            </Link>
        </li>
    )
}





export default  SingleInvestor;