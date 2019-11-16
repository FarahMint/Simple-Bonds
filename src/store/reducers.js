import {  
  GET_BONDS , 
  GET_INVESTORS ,
  GET_SINGLE_INVESTOR,
  GET_SINGLE_INVESTOR_DETAILS,
  GET_QUERY ,
  GET_INVESTOR_PORTFOLIO, 
  GET_AMOUNT_INVESTED, 
  ADD_INVESTMENT, 
  CANCEL_INVESTMENT} from "./actions";

  
const initState={
  bondsList:[],
  investors: [],
  portfolio:[],
  singleInvestor:{},
  investorPortfolio:  [],
  amount: 0,
  investorSelected:"",
  query:""
}

function investmentReducer(state = initState, action) {
  switch (action.type) {
    case GET_BONDS:
      return{
        ...state,
        bondsList: action.payload
      }
    
      case GET_INVESTORS:
        return{
          ...state,
          investors: action.payload
        }

      case GET_SINGLE_INVESTOR:
       
        return{
          ...state,
          investorSelected: action.payload
        }
      case GET_SINGLE_INVESTOR_DETAILS:
       
        let temporyInv = [...state.investors];
        const investor =temporyInv.find(inv => inv.id === action.payload);
        let temporyP = [...state.portfolio];
        const invertorP =temporyP.filter(inv => inv.investor_id === action.payload);
        console.log(investor);
        console.log(invertorP);
        
        return{
          ...state,
          singleInvestor:investor,
          investorPortfolio: invertorP
          
        }
      case GET_QUERY :
      
        return{
          ...state,
          query: action.payload, 
        }
 
      case GET_INVESTOR_PORTFOLIO:
        return{
          ...state,
          portfolio: action.payload
        }
      case GET_AMOUNT_INVESTED:
  
        return{
          ...state,
          amount: action.payload
        }

        case ADD_INVESTMENT:
          return {...state};
        case CANCEL_INVESTMENT:           
          return {...state};
        
 
  
    default:
      return state;
  }
}

export { investmentReducer };
