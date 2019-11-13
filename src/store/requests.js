const APIURL = "http://165.227.229.49:8000";
const axios = require("axios");
export const getBonds = () =>
  axios.get(`${APIURL}/bonds?api_key=uMaxxMRQaPYxYfD2yWMqeVDldWjEmajB`);
export const getInvestors = () =>
  axios.get(`${APIURL}/investors?api_key=uMaxxMRQaPYxYfD2yWMqeVDldWjEmajB`);


  export const addInvestment = (investorId, data) =>axios.post(`${APIURL}/investors/${investorId}/investments?api_key=uMaxxMRQaPYxYfD2yWMqeVDldWjEmajB`, data);
  
  export const deleteInvestment = (investorId, investmentId) =>
  axios.delete(
    `${APIURL}/investors/${investorId}/investments/${investmentId}/?api_key=uMaxxMRQaPYxYfD2yWMqeVDldWjEmajB`
    );
    
    export const getInvestorsPortfolio= (investorId) =>
      axios.get(`${APIURL}/investors/${investorId}/investments?api_key=uMaxxMRQaPYxYfD2yWMqeVDldWjEmajB`);