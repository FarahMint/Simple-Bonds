import {  GET_BONDS , GET_INVESTORS ,GET_SINGLE_INVESTOR,GET_INVESTOR_PORTFOLIO, GET_AMOUNT_INVESTED, ADD_INVESTMENT, CANCEL_INVESTMENT} from "./actions";

const initState={
  bondsList:[],
  investors: [],
  portfolio:[],
  amount: 0,
  investorSelected:"",
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
