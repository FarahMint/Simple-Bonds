import React , {useContext} from 'react';

import PropTypes from "prop-types";

import { GET_QUERY } from "../../store/actions";

/**IMPORT CONTEXT */
import { InvestorContext } from "../../store";

export default function Search({investors }) {

    const { state, dispatch} = useContext(InvestorContext);
    const { query } =  state;
 
    return ( 
    <form  className="search"> 
        <input
          placeholder="Search for..."
          className="searchTerm"
          type="text"
          value={query ||""}
        onChange= {(e) =>
            dispatch({
              type: GET_QUERY ,
              payload: e.target.value
            })
          }
        />
      </form>
    )
}


Search.propTypes = {
    query: PropTypes.string,
 
  };