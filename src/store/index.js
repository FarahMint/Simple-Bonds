import React, {useReducer, useEffect, useState, createContext} 
from 'react';
 
import {  getBonds , getInvestors, getInvestorsPortfolio , addInvestment, deleteInvestment} from "./requests";
import { GET_BONDS , GET_INVESTORS, GET_INVESTOR_PORTFOLIO, ADD_INVESTMENT, CANCEL_INVESTMENT} from "./actions";

 
import { investmentReducer } from "./reducers";
import axios from "axios"


export const InvestorContext=  createContext();

  const InvestorContextProvider =(props)=>{  
  const [initialized, setInitialized] = useState(false);
  const [alert, setAlert] = useState({show:false});

  const [state, dispatch] = useReducer(investmentReducer, {});

  const postData = async (investorSelected,  data)=>{

    if (state.amount === undefined ||!investorSelected) {
      handleAlert({ status:"danger", text: "missing info"});
      return;
    }

    try{
      let response =   await addInvestment(investorSelected,  data);
      dispatch({type: ADD_INVESTMENT, payload: response})
       

    }catch(e){
      console.log(e)
    }
  }

  const cancelInvestment = async (investorId, investmentId)=>{
    try{

      let response =   await deleteInvestment(investorId, investmentId);
      dispatch({type: CANCEL_INVESTMENT, payload: response})
      handleAlert({ status:"success", text: "investment cancelled"});
    }catch(e){
      console.log(e)
    }
  }



const  getData = async () => {
  try{
    let portfolio= [];
  
    const[investors, bondsList]= await axios.all([getInvestors(),getBonds()]);
       
       dispatch({ type: GET_BONDS , payload:   bondsList.data.data });
       dispatch({ type: GET_INVESTORS , payload: investors.data.data });
  
      let invArr = [...investors.data.data]
   
    invArr.map(async el=>{
        const result = await getInvestorsPortfolio(el.id);
        let newArr = result.data.data; 
        newArr.map(el => portfolio.push(el))  
    })
  
     dispatch({ type: GET_INVESTOR_PORTFOLIO , payload: portfolio});setInitialized(true);

  }catch(e){
   console.log(e)
  }
};

 
  
  useEffect(() => {
    if (!initialized) {
        getData();
       }     
  }, [initialized]);


   //notification alert 
   const handleAlert = ({status, text})=>{
    setAlert({show: true,  status, text});
    setTimeout(()=> setAlert({show: false}), 5000)
  };


    return(
        <InvestorContext.Provider  value={{
          state,
          dispatch,
          alert,
          postData,
          cancelInvestment,
   
   }}>
           {props.children}
        </InvestorContext.Provider >
    );
}
export default InvestorContextProvider;