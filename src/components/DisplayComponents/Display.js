import React from "react";

import Operators from '../ButtonComponents/OperatorButtons/Operators';
import Specials from '../ButtonComponents/SpecialButtons/Specials';
import Numbers from '../ButtonComponents/NumberButtons/Numbers';

const Display = (props) => {
  console.log('Display', props, props.number);
  return <div className="display">
    {/* Display any props data here */}
    {props.number}
    
  </div>;
};

export default Display;
