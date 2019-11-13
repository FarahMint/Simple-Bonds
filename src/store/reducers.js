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
     
      state.bondsList = JSON.parse(JSON.stringify(action.payload));
      return state;
      

      case GET_INVESTORS:
        state.investors  = JSON.parse(JSON.stringify(action.payload));
        return state;

      case GET_SINGLE_INVESTOR:
       
        return{
          ...state,
          investorSelected: action.payload
        }
      case GET_INVESTOR_PORTFOLIO:
        state.portfolio  = action.payload;
        return state;
      case GET_AMOUNT_INVESTED:
  
        return{
          ...state,
          amount: action.payload
        }

        case ADD_INVESTMENT:
          console.log(action.payload)
          // state = JSON.parse(JSON.stringify(action.payload));
          return {...state};
        case CANCEL_INVESTMENT:
          console.log(action.payload)
          // state = JSON.parse(JSON.stringify(action.payload));
          return {...state};
        
 
  
    default:
      return state;
  }
}

export { investmentReducer };
