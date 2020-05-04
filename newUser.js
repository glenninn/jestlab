const concat = require("./amok");

const first = "glenn";
const last  = "inn";

const makeUser = (fn,ln)=>{
  return  {
     name: concat( fn,ln),
	 mdy : ""
	 };
}

module.exports = makeUser;